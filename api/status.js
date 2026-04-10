function collectStringValues(value, results = [], seen = new WeakSet()) {
    if (value == null) return results;

    if (typeof value === 'string') {
        results.push(value.trim());
        return results;
    }

    if (typeof value !== 'object') return results;
    if (seen.has(value)) return results;
    seen.add(value);

    if (Array.isArray(value)) {
        value.forEach((item) => collectStringValues(item, results, seen));
        return results;
    }

    Object.values(value).forEach((item) => collectStringValues(item, results, seen));
    return results;
}

function looksLikePixCode(value) {
    if (!value || typeof value !== 'string') return false;
    const normalized = value.replace(/\s+/g, '');
    return normalized.startsWith('000201') && normalized.length > 40;
}

function looksLikeBase64Image(value) {
    if (!value || typeof value !== 'string') return false;
    if (value.startsWith('data:image/')) return true;
    return /^[A-Za-z0-9+/=\s]+$/.test(value) && value.replace(/\s+/g, '').length > 300;
}

function extractPixDetails(source) {
    const values = collectStringValues(source);
    const pixCode = values.find(looksLikePixCode) || "";
    const qrImage = values.find(looksLikeBase64Image) || "";
    return { pixCode, qrImage };
}

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { id } = req.query;
    if (!id) return res.status(400).json({ message: 'Transaction ID is required' });

    const sk = process.env.VELANA_SECRET_KEY;
    if (!sk) {
        return res.status(500).json({
            message: 'VELANA_SECRET_KEY nao configurada no ambiente'
        });
    }

    // Velana Auth: Basic {SECRET_KEY}:x
    const authHeader = 'Basic ' + Buffer.from(sk + ':x').toString('base64');

    try {
        const response = await fetch(`https://api.velana.com.br/v1/transactions/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': authHeader
            }
        });

        const data = await response.json().catch(() => ({}));
        if (!response.ok) {
            console.error('Velana status error', {
                status: response.status,
                transactionId: id,
                data
            });
        }

        const pix = data.pix || {};
        const qrCode = pix.qrcode || data.qrCode || "";
        const qrCodeBase64 = pix.qrCodeBase64 || data.qrCodeBase64 || "";

        return res.status(response.status).json({
            ...data,
            id: data.id || null,
            status: data.status || null,
            qrCode,
            qrCodeBase64
        });
    } catch (error) {
        return res.status(500).json({ message: 'Erro interno ao checar status na Velana', error: error.message });
    }
}

