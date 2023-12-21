"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[9307],{103854:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-66343d90","path":"/devices/QT-05M.html","title":"QOTO QT-05M control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"QOTO QT-05M control via MQTT","description":"Integrate your QOTO QT-05M via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-08-31T11:26:27.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Water flow (numeric)","slug":"water-flow-numeric","link":"#water-flow-numeric","children":[]},{"level":3,"title":"Last watering duration (numeric)","slug":"last-watering-duration-numeric","link":"#last-watering-duration-numeric","children":[]},{"level":3,"title":"Remaining watering time (numeric)","slug":"remaining-watering-time-numeric","link":"#remaining-watering-time-numeric","children":[]},{"level":3,"title":"Valve state (numeric)","slug":"valve-state-numeric","link":"#valve-state-numeric","children":[]},{"level":3,"title":"Shutdown timer (numeric)","slug":"shutdown-timer-numeric","link":"#shutdown-timer-numeric","children":[]},{"level":3,"title":"Valve state auto shutdown (numeric)","slug":"valve-state-auto-shutdown-numeric","link":"#valve-state-auto-shutdown-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1703141297000},"filePathRelative":"devices/QT-05M.md"}')},46802:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var a=i(166252);const n=(0,a._)("h1",{id:"qoto-qt-05m",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#qoto-qt-05m","aria-hidden":"true"},"#"),(0,a.Uk)(" QOTO QT-05M")],-1),o=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),d=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"QT-05M")],-1),r=(0,a._)("td",null,"Vendor",-1),l=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Solar powered garden watering timer")],-1),u=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"water_flow, last_watering_duration, remaining_watering_time, valve_state, shutdown_timer, valve_state_auto_shutdown, battery, linkquality")],-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/QT-05M.jpg",alt:"QOTO QT-05M"})])],-1),c=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="water-flow-numeric" tabindex="-1"><a class="header-anchor" href="#water-flow-numeric" aria-hidden="true">#</a> Water flow (numeric)</h3><p>Current water flow in %.. Value can be found in the published state on the <code>water_flow</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="last-watering-duration-numeric" tabindex="-1"><a class="header-anchor" href="#last-watering-duration-numeric" aria-hidden="true">#</a> Last watering duration (numeric)</h3><p>Last watering duration in seconds.. Value can be found in the published state on the <code>last_watering_duration</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>sec</code>.</p><h3 id="remaining-watering-time-numeric" tabindex="-1"><a class="header-anchor" href="#remaining-watering-time-numeric" aria-hidden="true">#</a> Remaining watering time (numeric)</h3><p>Remaning watering time (for auto shutdown). Updates every minute, and every 10s in the last minute.. Value can be found in the published state on the <code>remaining_watering_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>sec</code>.</p><h3 id="valve-state-numeric" tabindex="-1"><a class="header-anchor" href="#valve-state-numeric" aria-hidden="true">#</a> Valve state (numeric)</h3><p>Set valve to %.. Value can be found in the published state on the <code>valve_state</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;valve_state&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="shutdown-timer-numeric" tabindex="-1"><a class="header-anchor" href="#shutdown-timer-numeric" aria-hidden="true">#</a> Shutdown timer (numeric)</h3><p>Auto shutdown in seconds.. Value can be found in the published state on the <code>shutdown_timer</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;shutdown_timer&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>14400</code>. The unit of this value is <code>sec</code>.</p><h3 id="valve-state-auto-shutdown-numeric" tabindex="-1"><a class="header-anchor" href="#valve-state-auto-shutdown-numeric" aria-hidden="true">#</a> Valve state auto shutdown (numeric)</h3><p>Set valve to % with auto shutdown.. Value can be found in the published state on the <code>valve_state_auto_shutdown</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;valve_state_auto_shutdown&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17),h={},m=(0,i(983744).Z)(h,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),n,(0,a._)("table",null,[o,(0,a._)("tbody",null,[d,(0,a._)("tr",null,[r,(0,a._)("td",null,[(0,a.Wm)(i,{to:"/supported-devices/#v=QOTO"},{default:(0,a.w5)((()=>[(0,a.Uk)("QOTO")])),_:1})])]),l,u,s])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,a.kq)(" Notes END: Do not edit below this line "),c])}]])}}]);