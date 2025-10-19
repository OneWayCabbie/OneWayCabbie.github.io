import { Client } from '@thebcms/client';

// Check if required environment variables are present
const orgId = import.meta.env.BCMS_ORG_ID;
const instanceId = import.meta.env.BCMS_INSTANCE_ID;
const apiKeyId = import.meta.env.BCMS_API_KEY_ID;
const apiKeySecret = import.meta.env.BCMS_API_KEY_SECRET;

if (!orgId || !instanceId || !apiKeyId || !apiKeySecret) {
    console.warn('BCMS private environment variables are not set. Some features may not work properly.');
}

export const bcmsPrivate = new Client(
    orgId || '',
    instanceId || '',
    {
        id: apiKeyId || '',
        secret: apiKeySecret || '',
    },
    {
        injectSvg: true,
    },
);
