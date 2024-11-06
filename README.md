# Infinite 404 cache demo

1. `npm run build`
1. `npm run start`
1. Open http://localhost:3000/world
1. Page will be cached for 60 seconds, as expected
1. Open http://localhsot:3000/foobar
1. 404 will be cached **forever**, as not expected
