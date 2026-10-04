import React from 'react';
import { Helmet } from 'react-helmet-async';
export const SITE='https://www.fuzedflow.com';
export default function SEO({title,description,path='/',schema=[],noindex=false}) {
 const url=SITE+path;
 return <Helmet><title>{title} | Fuzed Flow</title><meta name="description" content={description}/><meta name="robots" content={noindex?'noindex,nofollow':'index,follow,max-image-preview:large'}/><link rel="canonical" href={url}/><meta property="og:title" content={`${title} | Fuzed Flow`}/><meta property="og:description" content={description}/><meta property="og:url" content={url}/><meta property="og:type" content="website"/><meta property="og:image" content={'https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/logos/fuzed-flow-logo.png'}/><meta name="twitter:card" content="summary_large_image"/>{schema.length>0&&<script type="application/ld+json">{JSON.stringify({'@context':'https://schema.org','@graph':schema}).replace(/</g,'\\u003c')}</script>}</Helmet>;
}
