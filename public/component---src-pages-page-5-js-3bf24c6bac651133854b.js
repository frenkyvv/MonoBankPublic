"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[134],{9365:function(e,a,t){var n=t(6540);const r=t(7581).Ay.button`
  background-color: rgba(0, 76, 153);
  color: #fff;
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  font-size: 26px;
  margin: 20px;
`;a.A=e=>{let{onClick:a,mostrarPropiedades:t}=e;return n.createElement(r,{onClick:a},t?"Transferencias":"Propiedades")}},884:function(e,a,t){t.r(a),t.d(a,{default:function(){return B}});var n=t(6540),r=t(4794),o=t(5388),l=t(1),c=t(7581),d=t(2405),i=t(4789),s=t(4506),u=t(5615),m=t(1739),g=t(1100);const p=async(e,a)=>{try{const t=(0,d.H9)(i.default,"jugadores",e);await(0,d.mZ)(t,{saldo:(0,d.GV)(a)}),console.log(`Saldo del jugador ${e} actualizado con éxito`)}catch(t){console.error(`Error al actualizar saldo del jugador ${e}:`,t)}};var f=()=>{const{0:e,1:a}=(0,n.useState)([]),{0:t,1:r}=(0,n.useState)(0),{0:o,1:l}=(0,n.useState)([]),{0:c,1:u}=(0,n.useState)(0),{0:f,1:x}=(0,n.useState)(0),{0:b,1:A}=(0,n.useState)(0),{0:v,1:w}=(0,n.useState)(0),{0:j,1:S}=(0,n.useState)(""),{0:k,1:J}=(0,n.useState)([]);(0,n.useEffect)((()=>{(async()=>{try{const e=(0,d.rJ)(i.default,"jugadores");return(await(0,d.GG)(e)).docs.map((e=>({id:e.id,...e.data()})))}catch(e){console.error("Error al obtener jugadores:",e)}})().then((e=>{a(e),e.forEach((e=>{"Jugador1"===e.id?u(e.saldo):"Jugador2"===e.id?x(e.saldo):"Jugador3"===e.id?A(e.saldo):"Jugador4"===e.id&&w(e.saldo)}))})),T().then((e=>{l(e)}));const e=(0,d.H9)(i.default,"jugadores","Jugador1");(0,d.aQ)(e,(e=>{e.data()&&e.data().saldo&&u(e.data().saldo)}));const t=(0,d.H9)(i.default,"jugadores","Jugador2");(0,d.aQ)(t,(e=>{e.data()&&e.data().saldo&&x(e.data().saldo)}));const n=(0,d.H9)(i.default,"jugadores","Jugador3");(0,d.aQ)(n,(e=>{e.data()&&e.data().saldo&&A(e.data().saldo)}));const r=(0,d.H9)(i.default,"jugadores","Jugador4");(0,d.aQ)(r,(e=>{e.data()&&e.data().saldo&&w(e.data().saldo)}))}),[]);const C=async(e,a,t)=>{try{console.log("agregarTransaccion: inicio");const n=(0,d.H9)(i.default,"jugadores","historial");console.log("agregarTransaccion: historialRef creado");const r={jugador:e,destinatario:a,cantidad:t,concepto:j,timestamp:(new Date).toISOString()};console.log("agregarTransaccion: nuevaTransaccion creada",r),await(0,d.mZ)(n,{transacciones:(0,d.hq)(r)}),console.log("agregarTransaccion: transacción agregada")}catch(n){console.error("Error al agregar transacción:",n)}},T=async()=>{try{const e=(0,d.H9)(i.default,"jugadores","historial"),a=await(0,d.x7)(e);return a.data().transacciones?a.data().transacciones.filter((e=>"Perla"===e.jugador&&0!==e.cantidad)):[]}catch(e){console.error("Error al obtener transacciones:",e)}},z=(e,a)=>{console.log("handleActualizarSaldo: inicio"),p("Jugador4",-t).then((()=>{console.log("handleActualizarSaldo: saldo de Perla actualizado"),p(e,t).then((()=>{console.log("handleActualizarSaldo: saldo del jugador seleccionado actualizado"),C("Perla",a,t).then((()=>{console.log("handleActualizarSaldo: transacción agregada"),l([].concat((0,s.A)(o),[{jugador:"Perla",destinatario:a||"Banco",cantidad:t,concepto:j,timestamp:(new Date).toLocaleString()}])),r(0),S("")}))}))}))};return n.createElement(y,null,n.createElement(h,null,"Transferir Fondos"),n.createElement(g.A,{className:"mb-3"},n.createElement(g.A.Text,null,"$"),n.createElement(m.A.Control,{type:"number",value:t.toString(),onChange:e=>{r(parseInt(e.target.value))},"aria-label":"Amount (to the nearest dollar)"}),n.createElement(g.A.Text,null,".00")),n.createElement(g.A,{className:"mb-3"},n.createElement(g.A.Text,null,"Concepto:"),n.createElement(m.A.Control,{type:"text",value:j,onChange:e=>{S(e.target.value)}})),n.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},n.createElement(E,{variant:"success",onClick:()=>{console.log("handleBanco: inicio"),p("Jugador4",-t).then((()=>{console.log("handleBanco: saldo actualizado"),C("Perla","Banco",-t).then((()=>{console.log("handleBanco: transacción agregada"),l([].concat((0,s.A)(o),[{jugador:"Perla",destinatario:"Banco",cantidad:-t,concepto:j,timestamp:(new Date).toLocaleString()}]))}))}))}},n.createElement("span",null,"Banco")),n.createElement(E,{variant:"success",onClick:()=>z("Jugador1","Emilio")},"Emilio",n.createElement("br",null),n.createElement("p",null,c)),n.createElement(E,{variant:"success",onClick:()=>z("Jugador2","Nicole")},"Nicole",n.createElement("br",null),n.createElement("p",null,f)),n.createElement(E,{variant:"success",onClick:()=>z("Jugador3","Frenky")},"Frenky",n.createElement("p",null,b))),n.createElement("h2",null,"Historial de transacciones"),n.createElement("ul",null,o&&o.sort(((e,a)=>new Date(a.timestamp)-new Date(e.timestamp))).slice(0,5).map(((e,a)=>n.createElement("li",{key:a},new Date(e.timestamp).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"})," ","- ",e.jugador,": ",e.cantidad," -"," ",e.destinatario," - ",e.concepto)))))};const E=(0,c.Ay)(u.A)`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  width: 105px;
  cursor: pointer;
  &:hover {
    background-color: #3e8e41;
  }
`,y=c.Ay.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,h=c.Ay.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;var x=function(){const{0:e,1:a}=(0,n.useState)([]);return(0,n.useEffect)((()=>{(async()=>{try{const e=(0,d.H9)(i.default,"jugadores","Jugador4"),a=(await(0,d.x7)(e)).data().propiedades;return console.log(a),a}catch(e){return console.error(e),[]}})().then((e=>{a(e||[])}))}),[]),n.createElement(b,null,n.createElement(A,null,"Mis Propiedades"),n.createElement(v,null,n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{style:{width:"120px"}},"Número"),n.createElement("th",null,"Nombre de la Propiedad"))),n.createElement("tbody",null,e.map(((e,a)=>n.createElement("tr",{key:a},n.createElement("td",{style:{textAlign:"center"}},a+1),n.createElement("td",{style:{textAlign:"left"}},e))))))))};const b=c.Ay.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`,A=c.Ay.h1`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
`,v=c.Ay.div`
  display: grid;
  flex-direction: row dense;
  grid-column-gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  table th {
    text-align: center;
    font-weight: bold;
  }
  table td {
    text-align: center;
  }
`;var w=t(2864),j=t(9595);var S=function(){var e;const{0:a,1:t}=(0,n.useState)([{id:"Banco",nombre:"Banco"}]),{0:r,1:o}=(0,n.useState)([]),{0:l,1:c}=(0,n.useState)("Jugador"),{0:s,1:m}=(0,n.useState)("Propiedades"),{0:g,1:p}=(0,n.useState)(!1),{0:f,1:E}=(0,n.useState)("");return(0,n.useEffect)((()=>{(async()=>{try{const e=(0,d.rJ)(i.default,"jugadores");return(await(0,d.GG)(e)).docs.map((e=>({id:e.id,nombre:e.data().nombre}))).filter((e=>"Jugador2"!==e.id))}catch(e){console.error(e)}})().then((e=>t(e))),(async()=>{try{const e=(0,d.H9)(i.default,"jugadores","Jugador4");return(await(0,d.x7)(e)).data().propiedades}catch(e){console.error(e)}})().then((e=>o(e)))}),[]),n.createElement(k,{className:"text-center"},n.createElement("h1",null,"Traspasar propiedades"),n.createElement("h4",null,"A que jugador quieres transferir la propiedad:"),n.createElement(J,null,n.createElement(w.A,null,n.createElement(w.A.Toggle,{variant:"success",id:"dropdown-basic"},(null===(e=a.find((e=>e.id===l)))||void 0===e?void 0:e.nombre)||"Jugador"),n.createElement(w.A.Menu,null,a.map(((e,a)=>n.createElement(w.A.Item,{key:a,onClick:()=>(e=>{"Banco"===e.id?c("Banco"):c(e.id)})(e)},"Banco"===e.id?"Banco":e.nombre))))),n.createElement(w.A,null,n.createElement(w.A.Toggle,{variant:"success",id:"dropdown-basic"},s),n.createElement(w.A.Menu,null,r.map(((e,a)=>n.createElement(w.A.Item,{key:a,onClick:()=>(e=>{m(e)})(e)},e)))))),n.createElement(u.A,{onClick:()=>{"Banco"===l?(async(e,a,t)=>{try{const n=(0,d.H9)(i.default,"jugadores","Jugador4"),r=(0,d.H9)(i.default,"jugadores","Banco");if((await(0,d.x7)(n)).data().propiedades.includes(e)){await(0,d.mZ)(n,{propiedades:(0,d.C3)(e)});(await(0,d.x7)(r)).data().propiedades||await(0,d.mZ)(r,{propiedades:[]}),await(0,d.mZ)(r,{propiedades:(0,d.hq)(e)}),a(!0),t(`Transferencia de ${e} al Banco correcta`),console.log(`Propiedad ${e} transferida al Banco`)}else a(!0),t("La propiedad seleccionada no existe en el array de Emilio"),console.error("La propiedad seleccionada no existe en el array de Emilio")}catch(n){a(!0),t("Ocurrió un error durante la transferencia"),console.error(n)}})(s,p,E):(async(e,a,t,n,r)=>{try{const l=(0,d.H9)(i.default,"jugadores","Jugador4"),c=(0,d.H9)(i.default,"jugadores",e);if((await(0,d.x7)(l)).data().propiedades.includes(a)){var o;await(0,d.mZ)(l,{propiedades:(0,d.C3)(a)});(await(0,d.x7)(c)).data().propiedades||await(0,d.mZ)(c,{propiedades:[]}),await(0,d.mZ)(c,{propiedades:(0,d.hq)(a)}),n(!0),r(`Transferencia de ${a} a ${null===(o=t.find((a=>a.id===e)))||void 0===o?void 0:o.nombre} correcta`),console.log(`Propiedad ${a} transferida a ${e}`)}else n(!0),r("La propiedad seleccionada no existe en el array de Emilio"),console.error("La propiedad seleccionada no existe en el array de Emilio")}catch(l){n(!0),r("Ocurrió un error durante la transferencia"),console.error(l)}})(l,s,a,p,E)}},"Transferir"),g&&n.createElement(n.Fragment,null,n.createElement(C,null),n.createElement(T,null,n.createElement(j.A,{variant:"success",onClose:()=>p(!1),dismissible:!0},n.createElement(j.A.Heading,null,"Transferencia exitosa"),n.createElement("p",null,f)))))};const k=c.Ay.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,J=c.Ay.div`
  display: flex;
  justify-content: space-between;
  width: 350px; /* ajusta el ancho según tus necesidades */
  margin: 15px;
`,C=c.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`,T=c.Ay.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;var z=t(9365);var B=function(){const{0:e,1:a}=(0,n.useState)(!1),{0:t,1:c}=(0,n.useState)([]),{0:s,1:u}=(0,n.useState)(!0),m=(0,d.rJ)(i.default,"jugadores"),g=(0,d.P)(m);(0,n.useEffect)((()=>{(0,d.aQ)(g,(e=>{const a=[];e.forEach((e=>{a.push(e.data())})),c(a),u(!1)}))}),[]);const p=t.length>0?t[4]:null;return n.createElement(o.A,null,n.createElement(l.A,{title:"Perla"}),n.createElement(P,null,p&&n.createElement(n.Fragment,null,n.createElement(H,null,p.nombre),n.createElement($,null,p.saldo),n.createElement(z.A,{onClick:()=>{a(!e)},mostrarPropiedades:e}),e?n.createElement(n.Fragment,null,n.createElement(S,null),n.createElement(x,null)):n.createElement(f,null),n.createElement(r.Link,{to:"/"},"Go back to the homepage"))))};const P=c.Ay.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`,H=c.Ay.div`
  font-size: 34px;
  font-weight: bold;
`,$=c.Ay.div`
  font-size: 24px;
`}}]);
//# sourceMappingURL=component---src-pages-page-5-js-3bf24c6bac651133854b.js.map