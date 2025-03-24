import type { APIRoute } from 'astro';

export const prerender: boolean = true;

export const POST: APIRoute = async ({ request }) => {
    const body = await request.json();
    const params = new URLSearchParams(body).toString();

    const req = await fetch(`${import.meta.env.PABBLY_URL}?${params}`);

    const data = await req.json();

    return new Response(JSON.stringify({
        data
    }));
 };