import"./axios-fa182db5.js";import{o as n,c as r,b as e,r as x,I as P,i as p,H as N,d as m,u as d,F as b,C as U,h as f,L as B,t as _,G as g}from"./app-041f9367.js";import{u as $}from"./response-7e3b2e08.js";function C(i,c){return n(),r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"})])}function D(i,c){return n(),r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"})])}function T(){const i=x([]),c=x([]),l=x(""),u=P(),{confirm:v,accepted:h,rejected:w}=$();return{errors:l,pengguna:i,notifications:c,level:["administrator","approval","review","operator"],getPengguna:async(t=1,o)=>{try{const s=o===void 0?`page=${t}`:`keyword=${o}`,k=await p.get(`/api/pengguna?${s}`);i.value=await k.data}catch(s){console.log(s.response)}},getNotifications:async()=>{try{const t=await p.get("/api/notifikasi");c.value=await t.data}catch(t){console.log(t.response)}},listUser:async()=>{try{const t=await p.get("/api/pengguna?type=list");i.value=await t.data}catch(t){console.log(t)}},storeUser:async t=>{l.value="";try{const o=await p.post("/api/pengguna",t);i.value=await o.data,h("Data Telah disimpan"),u.back()}catch(o){console.log(o.response),o.response.status===422&&(l.value=o.response.data.errors)}},updateUser:async(t,o)=>{try{const s=await p.put(`/api/pengguna/${t}`,o);i.value=await s.data,h("Data Telah disimpan"),u.back()}catch(s){console.log(s.response),s.response.status===422&&(l.value=s.response.data.errors)}},destroyUser:async t=>{if((await v("Apa anda yakin ingin menghapus data ini?")).isConfirmed)try{const s=await p.delete(`/api/pengguna/${t}`);i.value=await s.data,h("Data Telah dihapus"),u.back()}catch(s){w("Data tidak dihapus"),console.log(s.response)}else h("Proses telah dibatalkan")}}}const j=e("div",{class:"md:flex md:items-center md:justify-between pb-4"},[e("div",{class:"min-w-0 flex-1"},[e("h2",{class:"text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight"},"Pengguna")])],-1),V={class:"flex items-end"},A=e("div",{class:"w-full"},[e("div",{class:"grid grid-cols-1 sm:grid-cols-8 gap-3"},[e("div",{class:"col-span-1 sm:col-span-full"})])],-1),L={class:"flex"},R={href:"#/pengaturan",class:"ml-3 text-white bg-gray-700 hover:bg-white hover:text-gray-700 shadow-md group flex gap-x-3 rounded-md px-4 py-2 text-sm leading-6 font-semibold"},H=f(" Kembali "),M={href:"#/pengaturan/pengguna/create",class:"ml-3 text-white bg-blue-800 hover:bg-white hover:text-blue-700 shadow-md group flex gap-x-3 rounded-md px-4 py-2 text-sm leading-6 font-semibold"},z=f(" Tambah "),E={class:"mt-6 flow-root"},F={class:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},G={class:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"},I={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg"},K={class:"min-w-full divide-y divide-gray-300"},S=e("thead",{class:"bg-blue-800"},[e("tr",null,[e("th",{scope:"col",class:"w-1 py-3 pl-2 pr-1.5 text-left text-sm font-semibold text-white sm:pl-6"},"No"),e("th",{scope:"col",class:"px-3 py-3 text-left text-sm font-semibold text-white"},"Nama"),e("th",{scope:"col",class:"px-3 py-3 text-left text-sm font-semibold text-white"},"Level"),e("th",{scope:"col",class:"px-3 py-3 text-left text-sm font-semibold text-white"},"Loket"),e("th",{scope:"col",class:"relative py-3 pl-3 pr-4 sm:pr-6"},[e("span",{class:"sr-only"},"Edit")])])],-1),W={class:"divide-y divide-gray-200 bg-white"},q={class:"whitespace-normal py-3 pl-4 pr-3 text-xs font-medium sm:pl-6"},J={class:"whitespace-nowrap px-3 py-3 capitalize text-xs"},O={class:"whitespace-nowrap px-3 py-3 capitalize text-xs"},Q={class:"whitespace-nowrap px-3 py-3 text-xs"},X={key:0},Y={key:1},Z={key:2},ee={key:3},te={key:4},se={class:"relative whitespace-normal py-3 pl-3 pr-4 flex justify-end text-xs font-medium sm:pr-6"},ae=["href"],oe=f(" Detail "),ne={class:"sr-only"},ge={name:"Index",setup(i){const{pengguna:c,getPengguna:l}=T(),u=x("");return l(),(v,h)=>{const w=N("Pagination");return n(),r(b,null,[j,e("div",V,[A,e("div",L,[e("a",R,[m(d(B),{class:"h-5 w-5"}),H]),e("a",M,[m(d(D),{class:"h-5 w-5"}),z])])]),e("div",E,[e("div",F,[e("div",G,[e("div",I,[e("table",K,[S,e("tbody",W,[(n(!0),r(b,null,U(d(c).data,(a,y)=>(n(),r("tr",{key:a.id,class:"hover:bg-blue-300"},[e("td",q,_(y+1),1),e("td",J,_(a.name),1),e("td",O,_(a.level),1),e("td",Q,[a.room_id===null?(n(),r("span",X,"Semua")):g("",!0),a.room_id==="1"?(n(),r("span",Y,"A - Mutasi Kendaraan")):g("",!0),a.room_id==="2"?(n(),r("span",Z,"B - Balik Nama, Rubah Bentuk, Rubah Warna")):g("",!0),a.room_id==="3"?(n(),r("span",ee,"C - Ganti Plat (5 Tahunan)")):g("",!0),a.room_id==="4"?(n(),r("span",te,"D - Pajak Tahunan")):g("",!0)]),e("td",se,[e("a",{href:`#/pengaturan/pengguna/${a.uuid}`,class:"text-blue-800 hover:text-blue-600 flex"},[m(d(C),{class:"h-4 w-4 mr-1"}),oe,e("span",ne,", "+_(a.name),1)],8,ae)])]))),128))])]),m(w,{totalPages:d(c).last_page,currentPage:d(c).current_page,searchPage:u.value,onPagechanged:d(l)},null,8,["totalPages","currentPage","searchPage","onPagechanged"])])])])])],64)}}};export{ge as default};
