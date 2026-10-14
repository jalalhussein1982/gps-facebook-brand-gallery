const modal=document.querySelector('#preview-dialog');
const title=modal.querySelector('#preview-title');
const dimensions=modal.querySelector('#preview-dimensions');
const picture=modal.querySelector('#preview-image');
const pictureWrap=modal.querySelector('.modal-image-wrap');
const download=modal.querySelector('#preview-download');
let opener;
document.querySelectorAll('[data-preview]').forEach(button=>{
  button.addEventListener('click',()=>{
    opener=button;
    title.textContent=button.dataset.title;
    dimensions.textContent=button.dataset.dimensions;
    picture.src=button.dataset.preview;
    picture.alt=button.dataset.alt;
    pictureWrap.classList.toggle('profile',button.dataset.kind==='profile');
    download.href=button.dataset.preview;
    download.download=button.dataset.filename;
    download.textContent=button.dataset.kind==='profile'?'Download profile PNG':'Download cover PNG';
    modal.showModal();
    document.body.style.overflow='hidden';
  });
});
modal.querySelector('.close').addEventListener('click',()=>modal.close());
modal.addEventListener('click',event=>{if(event.target===modal){const r=modal.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)modal.close();}});
modal.addEventListener('close',()=>{document.body.style.overflow='';opener?.focus();});
