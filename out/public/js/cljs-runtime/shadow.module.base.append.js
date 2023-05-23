
shadow.cljs.devtools.client.env.module_loaded('base');

try { clouds.core.pre_init(); } catch (e) { console.error("An error occurred when calling (clouds.core/pre-init)"); throw(e); }