import { bcmsPrivate } from './src/bcms-private.ts';

async function main() {
    try {
        const entry = await bcmsPrivate.entry.getBySlug(
            'home',
            'onewaycabbie--one-way-taxi--one-way-cab',
        );
        console.log(JSON.stringify(entry, null, 2));
    } catch (error) {
        console.error('Failed to fetch entry:', error);
    }
}

main();
