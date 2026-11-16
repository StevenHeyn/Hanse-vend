import {mkdir, writeFile} from 'node:fs/promises';
import {join} from 'node:path';

const root = 'https://raw.githubusercontent.com/StevenHeyn/dein-snackautomat.de/main/';
const files = [
  ['SMX-800-x-800.png','snackautomat.png'],
  ['sandenvendo-g-drink-design.png','getraenkeautomat.png'],
  ['barista-500-touch--product-image.jpg','kaffeeautomat.jpg'],
  ['neu-locker-18.jpg','sonderautomat.jpg'],
  ...Array.from({length:7},(_,i)=>['assets/referenzen/referenz-'+(i+1)+'.jpg','referenz-'+(i+1)+'.jpg'])
];
await mkdir('public/media',{recursive:true});
for(const [source,target] of files){
  let data;
  for(let attempt=1;attempt<=3;attempt++){
    try{
      const response=await fetch(root+source,{signal:AbortSignal.timeout(20000)});
      if(!response.ok)throw new Error('HTTP '+response.status);
      const bytes=new Uint8Array(await response.arrayBuffer());
      const png=bytes[0]===137&&bytes[1]===80&&bytes[2]===78&&bytes[3]===71;
      const jpg=bytes[0]===255&&bytes[1]===216&&bytes[2]===255;
      if(!(target.endsWith('.png')?png:jpg))throw new Error('Unexpected image format');
      if(bytes.length<1000||bytes.length>15_000_000)throw new Error('Unexpected image size');
      data=bytes;break;
    }catch(error){if(attempt===3)throw new Error('Unable to prepare '+target+': '+error.message);}
  }
  await writeFile(join('public/media',target),data);
  console.log('Prepared '+target);
}
