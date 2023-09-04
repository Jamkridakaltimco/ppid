import{I as f,r as g,a as v,o,c as l,b as e,f as y,g as r,K as h,F as p,C as k,t as i,G as m,v as u}from"./app-041f9367.js";import{u as w}from"./response-7e3b2e08.js";const N=e("div",{class:"md:flex md:items-center md:justify-between pb-4"},[e("div",{class:"min-w-0 flex-1"},[e("h2",{class:"text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight"},"Buat Antrian")])],-1),B={class:"max-w-xl"},V={class:"px-4 py-6 sm:p-8"},R={class:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6"},U={class:"sm:col-span-6"},M=e("label",{for:"room",class:"block text-sm font-medium leading-6 text-gray-900"},"Antrian",-1),S=["value"],C={key:0,class:"mt-1 text-xs text-red-600",id:"email-error"},D={class:"sm:col-span-6"},T=e("label",{for:"nik",class:"block text-sm font-medium leading-6 text-gray-900"},"Nomor NIK",-1),j={key:0,class:"mt-1 text-xs text-red-600",id:"email-error"},A={class:"sm:col-span-6"},I=e("label",{for:"fullname",class:"block text-sm font-medium leading-6 text-gray-900"},"Nama Sesuai Identitas",-1),K={key:0,class:"mt-1 text-xs text-red-600",id:"email-error"},P={class:"sm:col-span-6"},F=e("label",{for:"number_police",class:"block text-sm font-medium leading-6 text-gray-900"},"Nomor Polisi",-1),G={key:0,class:"mt-1 text-xs text-red-600",id:"email-error"},q={class:"sm:col-span-6"},E=e("label",{for:"number_part",class:"block text-sm font-medium leading-6 text-gray-900"},"Nomor Rangka",-1),L={key:0,class:"mt-1 text-xs text-red-600",id:"email-error"},W={class:"sm:col-span-6"},$=e("label",{for:"number_machine",class:"block text-sm font-medium leading-6 text-gray-900"},"Nomor Mesin",-1),z={key:0,class:"mt-1 text-xs text-red-600",id:"email-error"},H=e("div",{class:"flex items-center justify-end gap-x-3 border-t border-gray-900/10 px-4 py-4 sm:px-8"},[e("a",{href:"#/surat-masuk",class:"rounded-md text-sm bg-gray-600 hover:bg-gray-700 px-3 py-2 font-semibold text-white"},"Batal"),e("button",{type:"submit",class:"rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-md hover:bg-white hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"},"Simpan")],-1),X={name:"Create",setup(J){f();const{successResponse:b}=w(),a=g([]),c=g([]),t=v({room_id:null,nik:"",fullname:"",number_police:"",number_part:"",number_machine:""});function _(){c.value=[{id:1,nama:"A - Mutasi Kendaraan"},{id:2,nama:"B - Balik Nama, Rubah Bentuk, Rubah Warna"},{id:3,nama:"C - Ganti Plat (5 Tahunan)"},{id:4,nama:"D - Pajak Tahunan"}]}async function x(){try{const s=await(await axios.post("/api/guest",{...t})).data.id;await axios.post("/api/queue",{room_id:t.room_id,guest_id:s,number_police:t.number_police,number_part:t.number_part,number_machine:t.number_machine}),await b("Data Telah disimpan"),t.room_id=null,t.nik=null,t.fullname=null,t.number_police=null,t.number_machine=null,t.number_part=null}catch(d){a.value=d.response.data.errors,console.log(a.value)}}return _(),(d,s)=>(o(),l(p,null,[N,e("div",B,[e("form",{onSubmit:s[6]||(s[6]=y(n=>x(),["prevent"])),class:"bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"},[e("div",V,[e("div",R,[e("div",U,[M,e("div",null,[r(e("select",{"onUpdate:modelValue":s[0]||(s[0]=n=>t.room_id=n),name:"room",id:"room",autocomplete:"given-name",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"},[(o(!0),l(p,null,k(c.value,n=>(o(),l("option",{value:n.id},i(n.nama),9,S))),256))],512),[[h,t.room_id]]),a.value.room_id?(o(),l("p",C,i(a.value.buku_id[0]),1)):m("",!0)])]),e("div",D,[T,e("div",null,[r(e("input",{"onUpdate:modelValue":s[1]||(s[1]=n=>t.nik=n),type:"text",name:"nik",id:"nik",autocomplete:"given-name",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"},null,512),[[u,t.nik]]),a.value.nik?(o(),l("p",j,i(a.value.nik[0]),1)):m("",!0)])]),e("div",A,[I,e("div",null,[r(e("input",{"onUpdate:modelValue":s[2]||(s[2]=n=>t.fullname=n),type:"text",name:"fullname",id:"fullname",autocomplete:"given-name",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"},null,512),[[u,t.fullname]]),a.value.fullname?(o(),l("p",K,i(a.value.fullname[0]),1)):m("",!0)])]),e("div",P,[F,e("div",null,[r(e("input",{"onUpdate:modelValue":s[3]||(s[3]=n=>t.number_police=n),type:"text",name:"number_police",id:"number_police",autocomplete:"given-name",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"},null,512),[[u,t.number_police]]),a.value.number_police?(o(),l("p",G,i(a.value.number_police[0]),1)):m("",!0)])]),e("div",q,[E,e("div",null,[r(e("input",{"onUpdate:modelValue":s[4]||(s[4]=n=>t.number_part=n),type:"text",name:"number_part",id:"number_part",autocomplete:"given-name",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"},null,512),[[u,t.number_part]]),a.value.number_part?(o(),l("p",L,i(a.value.number_part[0]),1)):m("",!0)])]),e("div",W,[$,e("div",null,[r(e("input",{"onUpdate:modelValue":s[5]||(s[5]=n=>t.number_machine=n),type:"text",name:"number_machine",id:"number_machine",autocomplete:"given-name",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"},null,512),[[u,t.number_machine]]),a.value.number_machine?(o(),l("p",z,i(a.value.number_machine[0]),1)):m("",!0)])])])]),H],32)])],64))}};export{X as default};
