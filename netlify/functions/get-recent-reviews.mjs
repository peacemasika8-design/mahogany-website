import { neon } from '@neondatabase/serverless';

export default async () => {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const reviews = await sql`
      SELECT name, country, rating, comment, title, photo_url
      FROM reviews
      ORDER BY created_at DESC
      LIMIT 3
    `;
    return new Response(JSON.stringify(reviews), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=120'
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed' }), { status: 500 });
  }
};