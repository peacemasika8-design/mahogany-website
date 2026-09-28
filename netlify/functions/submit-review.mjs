import { neon } from '@neondatabase/serverless';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const formData = await req.formData();
    const name = formData.get('name');
    const country = formData.get('country');
    const rating = formData.get('rating');
    const comment = formData.get('comment');
    const title = formData.get('title');
    const photo = formData.get('photo');

    let photoUrl = null;

    if (photo && photo.size > 0) {
      const arrayBuffer = await photo.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const uploadResult = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          { folder: 'mahogany-reviews', resource_type: 'image' },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        ).end(buffer);
      });

      photoUrl = uploadResult.secure_url;
    }

    const sql = neon(process.env.DATABASE_URL);
    await sql`
      INSERT INTO reviews (name, country, rating, comment, title, photo_url)
      VALUES (${name}, ${country}, ${rating}, ${comment}, ${title}, ${photoUrl})
    `;

    return new Response(JSON.stringify({ success: true }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to save review' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};