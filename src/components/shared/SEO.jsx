import React from 'react';
import { Helmet } from 'react-helmet-async';
export const SITE='https://www.fuzedflow.com';
export default function SEO({title,description,path='/',schema=[],noindex=false}) {
 const url=SITE+path;
 const image='https://ochqexofahdssmarnict.supabase.co/storage/v1/object/public/logos/fuzed-flow-logo.png';
 const fullTitle=`${title} | Fuzed Flow`;
 return <Helmet><title>{fullTitle}</title><meta name="description" content={description}/><meta name="robots" content={noindex?'noindex,nofollow':'index,follow,max-image-preview:large'}/><link rel="canonical" href={url}/><link rel="alternate" hrefLang="en" href={url}/><link rel="alternate" hrefLang="x-default" href={url}/><meta property="og:title" content={fullTitle}/><meta property="og:description" content={description}/><meta property="og:url" content={url}/><meta property="og:type" content="website"/><meta property="og:site_name" content="Fuzed Flow"/><meta property="og:locale" content="en_CA"/><meta property="og:image" content={image}/><meta property="og:image:alt" content="Fuzed Flow contractor software"/><meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content={fullTitle}/><meta name="twitter:description" content={description}/><meta name="twitter:image" content={image}/>{schema.length>0&&<script type="application/ld+json">{JSON.stringify({'@context':'https://schema.org','@graph':schema}).replace(/</g,'\\u003c')}</script>}</Helmet>;
}
