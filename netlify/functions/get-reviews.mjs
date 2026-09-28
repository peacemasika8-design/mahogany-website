import { neon } from '@neondatabase/serverless';

export default async () => {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const reviews = await sql`
      SELECT id, name, country, rating, comment, title, photo_url, created_at
      FROM reviews
      ORDER BY created_at DESC
      LIMIT 50
    `;
    return new Response(JSON.stringify(reviews), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=60' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to load reviews' }), { status: 500 });
  }
};