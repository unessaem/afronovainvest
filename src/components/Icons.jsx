const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}

export const Shield = (p) => (
  <svg {...base} {...p}><path d="M12 3l7 3v6c0 4.2-2.9 7.7-7 9-4.1-1.3-7-4.8-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></svg>
)
export const Eye = (p) => (
  <svg {...base} {...p}><path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6S2 12 2 12z" /><circle cx="12" cy="12" r="2.6" /></svg>
)
export const Award = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="9" r="5" /><path d="M8.5 13.2L7 21l5-2.6L17 21l-1.5-7.8" /></svg>
)
export const Globe = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" /></svg>
)
export const Sprout = (p) => (
  <svg {...base} {...p}><path d="M12 21v-8" /><path d="M12 13c0-3.3 2.7-6 6-6 0 3.3-2.7 6-6 6z" /><path d="M12 15c-3.3 0-6-2.7-6-6 3.3 0 6 2.7 6 6z" /></svg>
)
export const Flask = (p) => (
  <svg {...base} {...p}><path d="M10 3h4M11 3v6L5.5 18.2A2 2 0 007.2 21h9.6a2 2 0 001.7-2.8L13 9V3" /><path d="M8.2 15h7.6" /></svg>
)
export const Ship = (p) => (
  <svg {...base} {...p}><path d="M3 17l1.6-5.3a1 1 0 01.96-.7h12.9a1 1 0 01.95.7L21 17" /><path d="M6 11V7h12v4" /><path d="M12 4v3" /><path d="M2.5 17.5c1.6 0 1.6 2 3.2 2s1.6-2 3.2-2 1.6 2 3.2 2 1.6-2 3.2-2 1.6 2 3.2 2 1.6-2 3.2-2" /></svg>
)
export const Box = (p) => (
  <svg {...base} {...p}><path d="M21 8l-9-5-9 5 9 5 9-5z" /><path d="M3 8v8l9 5 9-5V8" /><path d="M12 13v8" /></svg>
)
export const Doc = (p) => (
  <svg {...base} {...p}><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z" /><path d="M14 3v5h5" /><path d="M9 13h6M9 17h4" /></svg>
)
export const Truck = (p) => (
  <svg {...base} {...p}><path d="M3 16V6h11v10" /><path d="M14 9h4l3 3v4h-3" /><circle cx="7.5" cy="17.5" r="2" /><circle cx="17.5" cy="17.5" r="2" /></svg>
)
export const Check = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M8.5 12.2l2.3 2.3 4.7-4.8" /></svg>
)
export const Users = (p) => (
  <svg {...base} {...p}><circle cx="9" cy="8" r="3.2" /><path d="M2.8 20a6.2 6.2 0 0112.4 0" /><path d="M16.5 5.4a3.2 3.2 0 010 5.4M18 20a6.4 6.4 0 00-2-4.6" /></svg>
)
export const Mail = (p) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3.5 6.5l8.5 6 8.5-6" /></svg>
)
export const Phone = (p) => (
  <svg {...base} {...p}><path d="M5 3h3.6l1.6 4-2.1 1.4a12.4 12.4 0 006.5 6.5L16 12.8l4 1.6V18a2 2 0 01-2.2 2A16.8 16.8 0 013 6.2 2 2 0 015 3z" /></svg>
)
export const Pin = (p) => (
  <svg {...base} {...p}><path d="M12 21s7-5.3 7-11a7 7 0 10-14 0c0 5.7 7 11 7 11z" /><circle cx="12" cy="10" r="2.6" /></svg>
)
export const Clock = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7.5V12l3 2" /></svg>
)
export const LinkedIn = (p) => (
  <svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10.5V17M8 7.6v.1M12 17v-3.6a2 2 0 014 0V17" /></svg>
)
export const ArrowRight = (p) => (
  <svg {...base} width="16" height="16" {...p}><path d="M4 12h15" /><path d="M13 6l6 6-6 6" /></svg>
)

export default { Shield, Eye, Award, Globe, Sprout, Flask, Ship, Box, Doc, Truck, Check, Users, Mail, Phone, Pin, Clock, LinkedIn, ArrowRight }
