import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json();
    const { name, email, phone, company, trade_type, team_size, preferred_date, message, form_type, address, city, province, postal_code } = body;

    if (!name || !phone) {
      return Response.json({ error: 'Name and phone are required' }, { status: 400 });
    }

    const lead = await base44.asServiceRole.entities.Lead.create({
      name,
      email: email || '',
      phone,
      company: company || '',
      trade_type: trade_type || '',
      team_size: team_size || '',
      preferred_date: preferred_date || '',
      message: message || '',
      form_type: form_type || 'demo_request',
      source: 'website_form',
      address: address || '',
      city: city || '',
      province: province || '',
      postal_code: postal_code || ''
    });

    return Response.json({ success: true, lead });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});