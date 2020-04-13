

function obrisiUsera(id)
{
    const el=document.querySelector(`#obrisi${id}`);
    const div=document.querySelector(`#obrisi${id}+div`);
    el.style.display='none';
    div.style.display='block';
    console.log(div);
}
function vratiUsera(id)
{
    const el=document.querySelector(`#obrisi${id}`);
    const div=document.querySelector(`#obrisi${id}+div`);
    el.style.display='inline';
    div.style.display='none';

}