import { Client } from '@thebcms/client';

// Check if required environment variables are present
const orgId = import.meta.env.PUBLIC_BCMS_ORG_ID;
const instanceId = import.meta.env.PUBLIC_BCMS_INSTANCE_ID;
const apiKeyId = import.meta.env.PUBLIC_BCMS_API_KEY_ID;
const apiKeySecret = import.meta.env.PUBLIC_BCMS_API_KEY_SECRET;

if (!orgId || !instanceId || !apiKeyId || !apiKeySecret) {
    console.warn('BCMS public environment variables are not set. Some features may not work properly.');
}

export const bcmsPublic = new Client(
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
