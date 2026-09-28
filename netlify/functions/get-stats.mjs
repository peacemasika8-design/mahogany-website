import { neon } from '@neondatabase/serverless';

export default async () => {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const result = await sql`
      SELECT 
        COUNT(*) as total,
        COALESCE(AVG(rating), 0) as average
      FROM reviews
    `;
    return new Response(JSON.stringify(result[0]), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed' }), { status: 500 });
  }
};