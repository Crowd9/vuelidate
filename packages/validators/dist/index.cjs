'use strict';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function makeMap$1(str, expectsLowerCase) {
  const set = new Set(str.split(","));
  return expectsLowerCase ? val => set.has(val.toLowerCase()) : val => set.has(val);
}

!!(process.env.NODE_ENV !== "production") ? Object.freeze({}) : {};
!!(process.env.NODE_ENV !== "production") ? Object.freeze([]) : [];

const extend$1 = Object.assign;

const hasOwnProperty$2 = Object.prototype.hasOwnProperty;

const hasOwn$1 = (val, key) => hasOwnProperty$2.call(val, key);

const isArray$1 = Array.isArray;

const isMap$1 = val => toTypeString$1(val) === "[object Map]";

const isString$1 = val => typeof val === "string";

const isSymbol = val => typeof val === "symbol";

const isObject$2 = val => val !== null && typeof val === "object";

const objectToString$1 = Object.prototype.toString;

const toTypeString$1 = value => objectToString$1.call(value);

const toRawType = value => {
  return toTypeString$1(value).slice(8, -1);
};

const isIntegerKey = key => isString$1(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;

makeMap$1(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
makeMap$1("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");

const cacheStringFunction = fn => {
  const cache = Object.create(null);
  return str => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const capitalize = cacheStringFunction(str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});

const hasChanged$1 = (value, oldValue) => !Object.is(value, oldValue);

const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const GLOBALS_ALLOWED$1 = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error";
makeMap$1(GLOBALS_ALLOWED$1);

const HTML_TAGS$1 = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS$1 = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const MATH_TAGS$1 = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
const VOID_TAGS$1 = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
makeMap$1(HTML_TAGS$1);
makeMap$1(SVG_TAGS$1);
makeMap$1(MATH_TAGS$1);
makeMap$1(VOID_TAGS$1);
const specialBooleanAttrs$1 = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
makeMap$1(specialBooleanAttrs$1);
makeMap$1(specialBooleanAttrs$1 + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
makeMap$1(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
makeMap$1(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);

/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/

function warn(msg) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  console.warn(`[Vue warn] ${msg}`, ...args);
}

let activeEffectScope;

function recordEffectScope(effect) {
  let scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : activeEffectScope;

  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}

let activeEffect;

class ReactiveEffect {
  constructor(fn, trigger, scheduler, scope) {
    this.fn = fn;
    this.trigger = trigger;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this._dirtyLevel = 4;
    this._trackId = 0;
    this._runnings = 0;
    this._shouldSchedule = false;
    this._depsLength = 0;
    recordEffectScope(this, scope);
  }

  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1;
      pauseTracking();

      for (let i = 0; i < this._depsLength; i++) {
        const dep = this.deps[i];

        if (dep.computed) {
          triggerComputed(dep.computed);

          if (this._dirtyLevel >= 4) {
            break;
          }
        }
      }

      if (this._dirtyLevel === 1) {
        this._dirtyLevel = 0;
      }

      resetTracking();
    }

    return this._dirtyLevel >= 4;
  }

  set dirty(v) {
    this._dirtyLevel = v ? 4 : 0;
  }

  run() {
    this._dirtyLevel = 0;

    if (!this.active) {
      return this.fn();
    }

    let lastShouldTrack = shouldTrack;
    let lastEffect = activeEffect;

    try {
      shouldTrack = true;
      activeEffect = this;
      this._runnings++;
      preCleanupEffect(this);
      return this.fn();
    } finally {
      postCleanupEffect(this);
      this._runnings--;
      activeEffect = lastEffect;
      shouldTrack = lastShouldTrack;
    }
  }

  stop() {
    var _a;

    if (this.active) {
      preCleanupEffect(this);
      postCleanupEffect(this);
      (_a = this.onStop) == null ? void 0 : _a.call(this);
      this.active = false;
    }
  }

}

function triggerComputed(computed) {
  return computed.value;
}

function preCleanupEffect(effect2) {
  effect2._trackId++;
  effect2._depsLength = 0;
}

function postCleanupEffect(effect2) {
  if (effect2.deps.length > effect2._depsLength) {
    for (let i = effect2._depsLength; i < effect2.deps.length; i++) {
      cleanupDepEffect(effect2.deps[i], effect2);
    }

    effect2.deps.length = effect2._depsLength;
  }
}

function cleanupDepEffect(dep, effect2) {
  const trackId = dep.get(effect2);

  if (trackId !== void 0 && effect2._trackId !== trackId) {
    dep.delete(effect2);

    if (dep.size === 0) {
      dep.cleanup();
    }
  }
}

let shouldTrack = true;
let pauseScheduleStack = 0;
const trackStack = [];

function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}

function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}

function pauseScheduling() {
  pauseScheduleStack++;
}

function resetScheduling() {
  pauseScheduleStack--;

  while (!pauseScheduleStack && queueEffectSchedulers.length) {
    queueEffectSchedulers.shift()();
  }
}

function trackEffect(effect2, dep, debuggerEventExtraInfo) {
  var _a;

  if (dep.get(effect2) !== effect2._trackId) {
    dep.set(effect2, effect2._trackId);
    const oldDep = effect2.deps[effect2._depsLength];

    if (oldDep !== dep) {
      if (oldDep) {
        cleanupDepEffect(oldDep, effect2);
      }

      effect2.deps[effect2._depsLength++] = dep;
    } else {
      effect2._depsLength++;
    }

    if (!!(process.env.NODE_ENV !== "production")) {
      (_a = effect2.onTrack) == null ? void 0 : _a.call(effect2, extend$1({
        effect: effect2
      }, debuggerEventExtraInfo));
    }
  }
}

const queueEffectSchedulers = [];

function triggerEffects(dep, dirtyLevel, debuggerEventExtraInfo) {
  var _a;

  pauseScheduling();

  for (const effect2 of dep.keys()) {
    let tracking;

    if (effect2._dirtyLevel < dirtyLevel && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
      effect2._shouldSchedule || (effect2._shouldSchedule = effect2._dirtyLevel === 0);
      effect2._dirtyLevel = dirtyLevel;
    }

    if (effect2._shouldSchedule && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
      if (!!(process.env.NODE_ENV !== "production")) {
        (_a = effect2.onTrigger) == null ? void 0 : _a.call(effect2, extend$1({
          effect: effect2
        }, debuggerEventExtraInfo));
      }

      effect2.trigger();

      if ((!effect2._runnings || effect2.allowRecurse) && effect2._dirtyLevel !== 2) {
        effect2._shouldSchedule = false;

        if (effect2.scheduler) {
          queueEffectSchedulers.push(effect2.scheduler);
        }
      }
    }
  }

  resetScheduling();
}

const createDep = (cleanup, computed) => {
  const dep = new Map();
  dep.cleanup = cleanup;
  dep.computed = computed;
  return dep;
};

const targetMap = new WeakMap();
const ITERATE_KEY = Symbol(!!(process.env.NODE_ENV !== "production") ? "iterate" : "");
const MAP_KEY_ITERATE_KEY = Symbol(!!(process.env.NODE_ENV !== "production") ? "Map key iterate" : "");

function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);

    if (!depsMap) {
      targetMap.set(target, depsMap = new Map());
    }

    let dep = depsMap.get(key);

    if (!dep) {
      depsMap.set(key, dep = createDep(() => depsMap.delete(key)));
    }

    trackEffect(activeEffect, dep, !!(process.env.NODE_ENV !== "production") ? {
      target,
      type,
      key
    } : void 0);
  }
}

function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);

  if (!depsMap) {
    return;
  }

  let deps = [];

  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray$1(target)) {
    const newLength = Number(newValue);
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || !isSymbol(key2) && key2 >= newLength) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }

    switch (type) {
      case "add":
        if (!isArray$1(target)) {
          deps.push(depsMap.get(ITERATE_KEY));

          if (isMap$1(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }

        break;

      case "delete":
        if (!isArray$1(target)) {
          deps.push(depsMap.get(ITERATE_KEY));

          if (isMap$1(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }

        break;

      case "set":
        if (isMap$1(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }

        break;
    }
  }

  pauseScheduling();

  for (const dep of deps) {
    if (dep) {
      triggerEffects(dep, 4, !!(process.env.NODE_ENV !== "production") ? {
        target,
        type,
        key,
        newValue,
        oldValue,
        oldTarget
      } : void 0);
    }
  }

  resetScheduling();
}

const isNonTrackableKeys = makeMap$1(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).filter(key => key !== "arguments" && key !== "caller").map(key => Symbol[key]).filter(isSymbol));
const arrayInstrumentations = createArrayInstrumentations();

function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach(key => {
    instrumentations[key] = function () {
      const arr = toRaw(this);

      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
        args[_key3] = arguments[_key3];
      }

      const res = arr[key](...args);

      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach(key => {
    instrumentations[key] = function () {
      pauseTracking();
      pauseScheduling();

      for (var _len3 = arguments.length, args = new Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
        args[_key4] = arguments[_key4];
      }

      const res = toRaw(this)[key].apply(this, args);
      resetScheduling();
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}

function hasOwnProperty$1(key) {
  const obj = toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}

class BaseReactiveHandler {
  constructor() {
    let _isReadonly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    let _isShallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    this._isReadonly = _isReadonly;
    this._isShallow = _isShallow;
  }

  get(target, key, receiver) {
    const isReadonly2 = this._isReadonly,
          isShallow2 = this._isShallow;

    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return isShallow2;
    } else if (key === "__v_raw") {
      if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
        return target;
      }

      return;
    }

    const targetIsArray = isArray$1(target);

    if (!isReadonly2) {
      if (targetIsArray && hasOwn$1(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }

      if (key === "hasOwnProperty") {
        return hasOwnProperty$1;
      }
    }

    const res = Reflect.get(target, key, receiver);

    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }

    if (!isReadonly2) {
      track(target, "get", key);
    }

    if (isShallow2) {
      return res;
    }

    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }

    if (isObject$2(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }

    return res;
  }

}

class MutableReactiveHandler extends BaseReactiveHandler {
  constructor() {
    let isShallow2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    super(false, isShallow2);
  }

  set(target, key, value, receiver) {
    let oldValue = target[key];

    if (!this._isShallow) {
      const isOldValueReadonly = isReadonly(oldValue);

      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }

      if (!isArray$1(target) && isRef(oldValue) && !isRef(value)) {
        if (isOldValueReadonly) {
          return false;
        } else {
          oldValue.value = value;
          return true;
        }
      }
    }

    const hadKey = isArray$1(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn$1(target, key);
    const result = Reflect.set(target, key, value, receiver);

    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged$1(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }

    return result;
  }

  deleteProperty(target, key) {
    const hadKey = hasOwn$1(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);

    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }

    return result;
  }

  has(target, key) {
    const result = Reflect.has(target, key);

    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }

    return result;
  }

  ownKeys(target) {
    track(target, "iterate", isArray$1(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }

}

class ReadonlyReactiveHandler extends BaseReactiveHandler {
  constructor() {
    let isShallow2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    super(true, isShallow2);
  }

  set(target, key) {
    if (!!(process.env.NODE_ENV !== "production")) {
      warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
    }

    return true;
  }

  deleteProperty(target, key) {
    if (!!(process.env.NODE_ENV !== "production")) {
      warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
    }

    return true;
  }

}

const mutableHandlers = new MutableReactiveHandler();
const readonlyHandlers = new ReadonlyReactiveHandler();
new MutableReactiveHandler(true);
const shallowReadonlyHandlers = new ReadonlyReactiveHandler(true);

const toShallow = value => value;

const getProto = v => Reflect.getPrototypeOf(v);

function get(target, key) {
  let isReadonly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  let isShallow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);

  if (!isReadonly) {
    if (hasChanged$1(key, rawKey)) {
      track(rawTarget, "get", key);
    }

    track(rawTarget, "get", rawKey);
  }

  const {
    has: has2
  } = getProto(rawTarget);
  const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;

  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}

function has(key) {
  let isReadonly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);

  if (!isReadonly) {
    if (hasChanged$1(key, rawKey)) {
      track(rawTarget, "has", key);
    }

    track(rawTarget, "has", rawKey);
  }

  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}

function size(target) {
  let isReadonly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  target = target["__v_raw"];
  !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}

function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);

  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }

  return this;
}

function set(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const {
    has: has2,
    get: get2
  } = getProto(target);
  let hadKey = has2.call(target, key);

  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else if (!!(process.env.NODE_ENV !== "production")) {
    checkIdentityKeys(target, has2, key);
  }

  const oldValue = get2.call(target, key);
  target.set(key, value);

  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged$1(value, oldValue)) {
    trigger(target, "set", key, value, oldValue);
  }

  return this;
}

function deleteEntry(key) {
  const target = toRaw(this);
  const {
    has: has2,
    get: get2
  } = getProto(target);
  let hadKey = has2.call(target, key);

  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else if (!!(process.env.NODE_ENV !== "production")) {
    checkIdentityKeys(target, has2, key);
  }

  const oldValue = get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);

  if (hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }

  return result;
}

function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const oldTarget = !!(process.env.NODE_ENV !== "production") ? isMap$1(target) ? new Map(target) : new Set(target) : void 0;
  const result = target.clear();

  if (hadItems) {
    trigger(target, "clear", void 0, void 0, oldTarget);
  }

  return result;
}

function createForEach(isReadonly, isShallow) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}

function createIterableMethod(method, isReadonly, isShallow) {
  return function () {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap$1(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...arguments);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      next() {
        const {
          value,
          done
        } = innerIterator.next();
        return done ? {
          value,
          done
        } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },

      [Symbol.iterator]() {
        return this;
      }

    };
  };
}

function createReadonlyMethod(type) {
  return function () {
    if (!!(process.env.NODE_ENV !== "production")) {
      const key = (arguments.length <= 0 ? undefined : arguments[0]) ? `on key "${arguments.length <= 0 ? undefined : arguments[0]}" ` : ``;
      warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
    }

    return type === "delete" ? false : type === "clear" ? void 0 : this;
  };
}

function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get(this, key);
    },

    get size() {
      return size(this);
    },

    has,
    add,
    set,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get(this, key, false, true);
    },

    get size() {
      return size(this);
    },

    has,
    add,
    set,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get(this, key, true);
    },

    get size() {
      return size(this, true);
    },

    has(key) {
      return has.call(this, key, true);
    },

    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get(this, key, true, true);
    },

    get size() {
      return size(this, true);
    },

    has(key) {
      return has.call(this, key, true);
    },

    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach(method => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
  });
  return [mutableInstrumentations2, readonlyInstrumentations2, shallowInstrumentations2, shallowReadonlyInstrumentations2];
}

const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = createInstrumentations();

function createInstrumentationGetter(isReadonly, shallow) {
  const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly;
    } else if (key === "__v_isReadonly") {
      return isReadonly;
    } else if (key === "__v_raw") {
      return target;
    }

    return Reflect.get(hasOwn$1(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}

const mutableCollectionHandlers = {
  get: createInstrumentationGetter(false, false)
};
const readonlyCollectionHandlers = {
  get: createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: createInstrumentationGetter(true, true)
};

function checkIdentityKeys(target, has2, key) {
  const rawKey = toRaw(key);

  if (rawKey !== key && has2.call(target, rawKey)) {
    const type = toRawType(target);
    warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}

const reactiveMap = new WeakMap();
const shallowReactiveMap = new WeakMap();
const readonlyMap = new WeakMap();
const shallowReadonlyMap = new WeakMap();

function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;

    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;

    default:
      return 0;
  }
}

function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}

function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }

  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}

function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}

function shallowReadonly(target) {
  return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}

function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject$2(target)) {
    if (!!(process.env.NODE_ENV !== "production")) {
      warn(`value cannot be made reactive: ${String(target)}`);
    }

    return target;
  }

  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }

  const existingProxy = proxyMap.get(target);

  if (existingProxy) {
    return existingProxy;
  }

  const targetType = getTargetType(target);

  if (targetType === 0) {
    return target;
  }

  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}

function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }

  return !!(value && value["__v_isReactive"]);
}

function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}

function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}

function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}

function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}

function markRaw(value) {
  if (Object.isExtensible(value)) {
    def(value, "__v_skip", true);
  }

  return value;
}

const toReactive = value => isObject$2(value) ? reactive(value) : value;

const toReadonly = value => isObject$2(value) ? readonly(value) : value;

function isRef(r) {
  return !!(r && r.__v_isRef === true);
}

function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}

const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];

    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};

function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}

/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function makeMap(str, expectsLowerCase) {
  const set = new Set(str.split(","));
  return expectsLowerCase ? val => set.has(val.toLowerCase()) : val => set.has(val);
}

const EMPTY_OBJ = !!(process.env.NODE_ENV !== "production") ? Object.freeze({}) : {};
!!(process.env.NODE_ENV !== "production") ? Object.freeze([]) : [];

const NOOP = () => {};

const isOn = key => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);

const extend = Object.assign;

const hasOwnProperty = Object.prototype.hasOwnProperty;

const hasOwn = (val, key) => hasOwnProperty.call(val, key);

const isArray = Array.isArray;

const isMap = val => toTypeString(val) === "[object Map]";

const isSet = val => toTypeString(val) === "[object Set]";

const isFunction$1 = val => typeof val === "function";

const isString = val => typeof val === "string";

const isObject$1 = val => val !== null && typeof val === "object";

const isPromise$1 = val => {
  return (isObject$1(val) || isFunction$1(val)) && isFunction$1(val.then) && isFunction$1(val.catch);
};

const objectToString = Object.prototype.toString;

const toTypeString = value => objectToString.call(value);

const isPlainObject = val => toTypeString(val) === "[object Object]";

makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");

const hasChanged = (value, oldValue) => !Object.is(value, oldValue);

let _globalThis;

const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
const GLOBALS_ALLOWED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error";
const isGloballyAllowed = makeMap(GLOBALS_ALLOWED);

function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};

    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);

      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }

    return res;
  } else if (isString(value) || isObject$1(value)) {
    return value;
  }
}

const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;

function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach(item => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}

function normalizeClass(value) {
  let res = "";

  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);

      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$1(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }

  return res.trim();
}

const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
makeMap(HTML_TAGS);
makeMap(SVG_TAGS);
makeMap(MATH_TAGS);
makeMap(VOID_TAGS);
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
makeMap(specialBooleanAttrs);
makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);

/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const stack = [];

function pushWarningContext(vnode) {
  stack.push(vnode);
}

function popWarningContext() {
  stack.pop();
}

function warn$1(msg) {
  pauseTracking();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (appWarnHandler) {
    callWithErrorHandling(appWarnHandler, instance, 11, [msg + args.map(a => {
      var _a, _b;

      return (_b = (_a = a.toString) == null ? void 0 : _a.call(a)) != null ? _b : JSON.stringify(a);
    }).join(""), instance && instance.proxy, trace.map(_ref => {
      let {
        vnode
      } = _ref;
      return `at <${formatComponentName(instance, vnode.type)}>`;
    }).join("\n"), trace]);
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];

    if (trace.length && true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }

    console.warn(...warnArgs);
  }

  resetTracking();
}

function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];

  if (!currentVNode) {
    return [];
  }

  const normalizedStack = [];

  while (currentVNode) {
    const last = normalizedStack[0];

    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }

    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }

  return normalizedStack;
}

function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...(i === 0 ? [] : [`
`]), ...formatTraceEntry(entry));
  });
  return logs;
}

function formatTraceEntry(_ref2) {
  let {
    vnode,
    recurseCount
  } = _ref2;
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}

function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach(key => {
    res.push(...formatProp(key, props[key]));
  });

  if (keys.length > 3) {
    res.push(` ...`);
  }

  return res;
}

function formatProp(key, value, raw) {
  if (isString(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction$1(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}
const ErrorTypeStrings$1 = {
  ["sp"]: "serverPrefetch hook",
  ["bc"]: "beforeCreate hook",
  ["c"]: "created hook",
  ["bm"]: "beforeMount hook",
  ["m"]: "mounted hook",
  ["bu"]: "beforeUpdate hook",
  ["u"]: "updated",
  ["bum"]: "beforeUnmount hook",
  ["um"]: "unmounted hook",
  ["a"]: "activated hook",
  ["da"]: "deactivated hook",
  ["ec"]: "errorCaptured hook",
  ["rtc"]: "renderTracked hook",
  ["rtg"]: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};

function callWithErrorHandling(fn, instance, type, args) {
  try {
    return args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
}

function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction$1(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);

    if (res && isPromise$1(res)) {
      res.catch(err => {
        handleError(err, instance, type);
      });
    }

    return res;
  }

  const values = [];

  for (let i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }

  return values;
}

function handleError(err, instance, type) {
  let throwInDev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  const contextVNode = instance ? instance.vnode : null;

  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = !!(process.env.NODE_ENV !== "production") ? ErrorTypeStrings$1[type] : `https://vuejs.org/error-reference/#runtime-${type}`;

    while (cur) {
      const errorCapturedHooks = cur.ec;

      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }

      cur = cur.parent;
    }

    const appErrorHandler = instance.appContext.config.errorHandler;

    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
      return;
    }
  }

  logError(err, type, contextVNode, throwInDev);
}

function logError(err, type, contextVNode) {
  let throwInDev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (!!(process.env.NODE_ENV !== "production")) {
    const info = ErrorTypeStrings$1[type];

    if (contextVNode) {
      pushWarningContext(contextVNode);
    }

    warn$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);

    if (contextVNode) {
      popWarningContext();
    }

    if (throwInDev) {
      throw err;
    } else {
      console.error(err);
    }
  } else {
    console.error(err);
  }
}

let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = Promise.resolve();
let currentFlushPromise = null;
const RECURSION_LIMIT = 100;

function nextTick(fn) {
  const p = currentFlushPromise || resolvedPromise;
  return fn ? p.then(this ? fn.bind(this) : fn) : p;
}

function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;

  while (start < end) {
    const middle = start + end >>> 1;
    const middleJob = queue[middle];
    const middleJobId = getId(middleJob);

    if (middleJobId < id || middleJobId === id && middleJob.pre) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }

  return start;
}

function queueJob(job) {
  if (!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
    }

    queueFlush();
  }
}

function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}

function queuePostFlushCb(cb) {
  if (!isArray(cb)) {
    if (!activePostFlushCbs || !activePostFlushCbs.includes(cb, cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex)) {
      pendingPostFlushCbs.push(cb);
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }

  queueFlush();
}

function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)].sort((a, b) => getId(a) - getId(b));
    pendingPostFlushCbs.length = 0;

    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }

    activePostFlushCbs = deduped;

    if (!!(process.env.NODE_ENV !== "production")) {
      seen = seen || new Map();
    }

    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      if (!!(process.env.NODE_ENV !== "production") && checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
        continue;
      }

      activePostFlushCbs[postFlushIndex]();
    }

    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}

const getId = job => job.id == null ? Infinity : job.id;

const comparator = (a, b) => {
  const diff = getId(a) - getId(b);

  if (diff === 0) {
    if (a.pre && !b.pre) return -1;
    if (b.pre && !a.pre) return 1;
  }

  return diff;
};

function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;

  if (!!(process.env.NODE_ENV !== "production")) {
    seen = seen || new Map();
  }

  queue.sort(comparator);
  const check = !!(process.env.NODE_ENV !== "production") ? job => checkRecursiveUpdates(seen, job) : NOOP;

  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];

      if (job && job.active !== false) {
        if (!!(process.env.NODE_ENV !== "production") && check(job)) {
          continue;
        }

        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs(seen);
    isFlushing = false;
    currentFlushPromise = null;

    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}

function checkRecursiveUpdates(seen, fn) {
  if (!seen.has(fn)) {
    seen.set(fn, 1);
  } else {
    const count = seen.get(fn);

    if (count > RECURSION_LIMIT) {
      const instance = fn.ownerInstance;
      const componentName = instance && getComponentName(instance.type);
      handleError(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`, null, 10);
      return true;
    } else {
      seen.set(fn, count + 1);
    }
  }
}
const hmrDirtyComponents = new Set();

if (!!(process.env.NODE_ENV !== "production")) {
  getGlobalThis().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
  };
}

const map = new Map();

function createRecord(id, initialDef) {
  if (map.has(id)) {
    return false;
  }

  map.set(id, {
    initialDef: normalizeClassComponent(initialDef),
    instances: new Set()
  });
  return true;
}

function normalizeClassComponent(component) {
  return isClassComponent(component) ? component.__vccOpts : component;
}

function rerender(id, newRender) {
  const record = map.get(id);

  if (!record) {
    return;
  }

  record.initialDef.render = newRender;
  [...record.instances].forEach(instance => {
    if (newRender) {
      instance.render = newRender;
      normalizeClassComponent(instance.type).render = newRender;
    }

    instance.renderCache = [];
    instance.effect.dirty = true;
    instance.update();
  });
}

function reload(id, newComp) {
  const record = map.get(id);
  if (!record) return;
  newComp = normalizeClassComponent(newComp);
  updateComponentDef(record.initialDef, newComp);
  const instances = [...record.instances];

  for (const instance of instances) {
    const oldComp = normalizeClassComponent(instance.type);

    if (!hmrDirtyComponents.has(oldComp)) {
      if (oldComp !== record.initialDef) {
        updateComponentDef(oldComp, newComp);
      }

      hmrDirtyComponents.add(oldComp);
    }

    instance.appContext.propsCache.delete(instance.type);
    instance.appContext.emitsCache.delete(instance.type);
    instance.appContext.optionsCache.delete(instance.type);

    if (instance.ceReload) {
      hmrDirtyComponents.add(oldComp);
      instance.ceReload(newComp.styles);
      hmrDirtyComponents.delete(oldComp);
    } else if (instance.parent) {
      instance.parent.effect.dirty = true;
      queueJob(instance.parent.update);
    } else if (instance.appContext.reload) {
      instance.appContext.reload();
    } else if (typeof window !== "undefined") {
      window.location.reload();
    } else {
      console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
    }
  }

  queuePostFlushCb(() => {
    for (const instance of instances) {
      hmrDirtyComponents.delete(normalizeClassComponent(instance.type));
    }
  });
}

function updateComponentDef(oldComp, newComp) {
  extend(oldComp, newComp);

  for (const key in oldComp) {
    if (key !== "__file" && !(key in newComp)) {
      delete oldComp[key];
    }
  }
}

function tryWrap(fn) {
  return (id, arg) => {
    try {
      return fn(id, arg);
    } catch (e) {
      console.error(e);
      console.warn(`[HMR] Something went wrong during Vue component hot-reload. Full reload required.`);
    }
  };
}

let devtools$1;
let buffer = [];

function setDevtoolsHook$1(hook, target) {
  var _a, _b;

  devtools$1 = hook;

  if (devtools$1) {
    devtools$1.enabled = true;
    buffer.forEach(_ref3 => {
      let {
        event,
        args
      } = _ref3;
      return devtools$1.emit(event, ...args);
    });
    buffer = [];
  } else if (typeof window !== "undefined" && window.HTMLElement && !((_b = (_a = window.navigator) == null ? void 0 : _a.userAgent) == null ? void 0 : _b.includes("jsdom"))) {
    const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
    replay.push(newHook => {
      setDevtoolsHook$1(newHook, target);
    });
    setTimeout(() => {
      if (!devtools$1) {
        target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
        buffer = [];
      }
    }, 3e3);
  } else {
    buffer = [];
  }
}

let currentRenderingInstance = null;
let currentScopeId = null;

function markAttrsAccessed() {
}

const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");

const isSuspense = type => type.__isSuspense;

function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}

const ssrContextKey = Symbol.for("v-scx");

const useSSRContext = () => {
  {
    const ctx = inject(ssrContextKey);

    if (!ctx) {
      !!(process.env.NODE_ENV !== "production") && warn$1(`Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build.`);
    }

    return ctx;
  }
};

const INITIAL_WATCHER_VALUE = {};

function doWatch(source, cb) {
  let {
    immediate,
    deep,
    flush,
    once,
    onTrack,
    onTrigger
  } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJ;

  if (cb && once) {
    const _cb = cb;

    cb = function () {
      _cb(...arguments);

      unwatch();
    };
  }

  if (!!(process.env.NODE_ENV !== "production") && deep !== void 0 && typeof deep === "number") {
    warn$1(`watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.`);
  }

  if (!!(process.env.NODE_ENV !== "production") && !cb) {
    if (immediate !== void 0) {
      warn$1(`watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`);
    }

    if (deep !== void 0) {
      warn$1(`watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`);
    }

    if (once !== void 0) {
      warn$1(`watch() "once" option is only respected when using the watch(source, callback, options?) signature.`);
    }
  }

  const warnInvalidSource = s => {
    warn$1(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`);
  };

  const instance = currentInstance;

  const reactiveGetter = source2 => deep === true ? source2 : traverse(source2, deep === false ? 1 : void 0);

  let getter;
  let forceTrigger = false;
  let isMultiSource = false;

  if (isRef(source)) {
    getter = () => source.value;

    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => reactiveGetter(source);

    forceTrigger = true;
  } else if (isArray(source)) {
    isMultiSource = true;
    forceTrigger = source.some(s => isReactive(s) || isShallow(s));

    getter = () => source.map(s => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return reactiveGetter(s);
      } else if (isFunction$1(s)) {
        return callWithErrorHandling(s, instance, 2);
      } else {
        !!(process.env.NODE_ENV !== "production") && warnInvalidSource(s);
      }
    });
  } else if (isFunction$1(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(source, instance, 2);
    } else {
      getter = () => {
        if (cleanup) {
          cleanup();
        }

        return callWithAsyncErrorHandling(source, instance, 3, [onCleanup]);
      };
    }
  } else {
    getter = NOOP;
    !!(process.env.NODE_ENV !== "production") && warnInvalidSource(source);
  }

  if (cb && deep) {
    const baseGetter = getter;

    getter = () => traverse(baseGetter());
  }

  let cleanup;

  let onCleanup = fn => {
    cleanup = effect.onStop = () => {
      callWithErrorHandling(fn, instance, 4);
      cleanup = effect.onStop = void 0;
    };
  };

  let ssrCleanup;

  if (isInSSRComponentSetup) {
    onCleanup = NOOP;

    if (!cb) {
      getter();
    } else if (immediate) {
      callWithAsyncErrorHandling(cb, instance, 3, [getter(), isMultiSource ? [] : void 0, onCleanup]);
    }

    if (flush === "sync") {
      const ctx = useSSRContext();
      ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
    } else {
      return NOOP;
    }
  }

  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;

  const job = () => {
    if (!effect.active || !effect.dirty) {
      return;
    }

    if (cb) {
      const newValue = effect.run();

      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }

        callWithAsyncErrorHandling(cb, instance, 3, [newValue, oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue, onCleanup]);
        oldValue = newValue;
      }
    } else {
      effect.run();
    }
  };

  job.allowRecurse = !!cb;
  let scheduler;

  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
  } else {
    job.pre = true;
    if (instance) job.id = instance.uid;

    scheduler = () => queueJob(job);
  }

  const effect = new ReactiveEffect(getter, NOOP, scheduler);

  const unwatch = () => {
    effect.stop();
  };

  if (!!(process.env.NODE_ENV !== "production")) {
    effect.onTrack = onTrack;
    effect.onTrigger = onTrigger;
  }

  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
  } else {
    effect.run();
  }

  if (ssrCleanup) ssrCleanup.push(unwatch);
  return unwatch;
}

function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;

  if (isFunction$1(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }

  const reset = setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  reset();
  return res;
}

function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;

    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }

    return cur;
  };
}

function traverse(value, depth) {
  let currentDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  let seen = arguments.length > 3 ? arguments[3] : undefined;

  if (!isObject$1(value) || value["__v_skip"]) {
    return value;
  }

  if (depth && depth > 0) {
    if (currentDepth >= depth) {
      return value;
    }

    currentDepth++;
  }

  seen = seen || new Set();

  if (seen.has(value)) {
    return value;
  }

  seen.add(value);

  if (isRef(value)) {
    traverse(value.value, depth, currentDepth, seen);
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], depth, currentDepth, seen);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach(v => {
      traverse(v, depth, currentDepth, seen);
    });
  } else if (isPlainObject(value)) {
    for (const key in value) {
      traverse(value[key], depth, currentDepth, seen);
    }
  }

  return value;
}

const getPublicInstance = i => {
  if (!i) return null;
  if (isStatefulComponent(i)) return getExposeProxy(i) || i.proxy;
  return getPublicInstance(i.parent);
};

const publicPropertiesMap = extend(Object.create(null), {
  $: i => i,
  $el: i => i.vnode.el,
  $data: i => i.data,
  $props: i => !!(process.env.NODE_ENV !== "production") ? shallowReadonly(i.props) : i.props,
  $attrs: i => !!(process.env.NODE_ENV !== "production") ? shallowReadonly(i.attrs) : i.attrs,
  $slots: i => !!(process.env.NODE_ENV !== "production") ? shallowReadonly(i.slots) : i.slots,
  $refs: i => !!(process.env.NODE_ENV !== "production") ? shallowReadonly(i.refs) : i.refs,
  $parent: i => getPublicInstance(i.parent),
  $root: i => getPublicInstance(i.root),
  $emit: i => i.emit,
  $options: i => __VUE_OPTIONS_API__ ? resolveMergedOptions(i) : i.type,
  $forceUpdate: i => i.f || (i.f = () => {
    i.effect.dirty = true;
    queueJob(i.update);
  }),
  $nextTick: i => i.n || (i.n = nextTick.bind(i.proxy)),
  $watch: i => __VUE_OPTIONS_API__ ? instanceWatch.bind(i) : NOOP
});

const isReservedPrefix = key => key === "_" || key === "$";

const hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);

const PublicInstanceProxyHandlers = {
  get(_ref9, key) {
    let {
      _: instance
    } = _ref9;
    const {
      ctx,
      setupState,
      data,
      props,
      accessCache,
      type,
      appContext
    } = instance;

    if (!!(process.env.NODE_ENV !== "production") && key === "__isVue") {
      return true;
    }

    let normalizedProps;

    if (key[0] !== "$") {
      const n = accessCache[key];

      if (n !== void 0) {
        switch (n) {
          case 1:
            return setupState[key];

          case 2:
            return data[key];

          case 4:
            return ctx[key];

          case 3:
            return props[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if ((normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (!__VUE_OPTIONS_API__ || shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }

    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;

    if (publicGetter) {
      if (key === "$attrs") {
        track(instance, "get", key);
        !!(process.env.NODE_ENV !== "production") && markAttrsAccessed();
      } else if (!!(process.env.NODE_ENV !== "production") && key === "$slots") {
        track(instance, "get", key);
      }

      return publicGetter(instance);
    } else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) {
      {
        return globalProperties[key];
      }
    } else if (!!(process.env.NODE_ENV !== "production") && currentRenderingInstance && (!isString(key) || key.indexOf("__v") !== 0)) {
      if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) {
        warn$1(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`);
      } else if (instance === currentRenderingInstance) {
        warn$1(`Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`);
      }
    }
  },

  set(_ref10, key, value) {
    let {
      _: instance
    } = _ref10;
    const {
      data,
      setupState,
      ctx
    } = instance;

    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (!!(process.env.NODE_ENV !== "production") && setupState.__isScriptSetup && hasOwn(setupState, key)) {
      warn$1(`Cannot mutate <script setup> binding "${key}" from Options API.`);
      return false;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn(instance.props, key)) {
      !!(process.env.NODE_ENV !== "production") && warn$1(`Attempting to mutate prop "${key}". Props are readonly.`);
      return false;
    }

    if (key[0] === "$" && key.slice(1) in instance) {
      !!(process.env.NODE_ENV !== "production") && warn$1(`Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`);
      return false;
    } else {
      if (!!(process.env.NODE_ENV !== "production") && key in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value
        });
      } else {
        ctx[key] = value;
      }
    }

    return true;
  },

  has(_ref11, key) {
    let {
      _: {
        data,
        setupState,
        accessCache,
        ctx,
        appContext,
        propsOptions
      }
    } = _ref11;
    let normalizedProps;
    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
  },

  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }

    return Reflect.defineProperty(target, key, descriptor);
  }

};

if (!!(process.env.NODE_ENV !== "production") && true) {
  PublicInstanceProxyHandlers.ownKeys = target => {
    warn$1(`Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`);
    return Reflect.ownKeys(target);
  };
}

extend({}, PublicInstanceProxyHandlers, {
  get(target, key) {
    if (key === Symbol.unscopables) {
      return;
    }

    return PublicInstanceProxyHandlers.get(target, key, target);
  },

  has(_, key) {
    const has = key[0] !== "_" && !isGloballyAllowed(key);

    if (!!(process.env.NODE_ENV !== "production") && !has && PublicInstanceProxyHandlers.has(_, key)) {
      warn$1(`Property ${JSON.stringify(key)} should not start with _ which is a reserved prefix for Vue internals.`);
    }

    return has;
  }

});

function normalizePropsOrEmits(props) {
  return isArray(props) ? props.reduce((normalized, p) => (normalized[p] = null, normalized), {}) : props;
}

let shouldCacheAccess = true;

function resolveMergedOptions(instance) {
  const base = instance.type;
  const {
    mixins,
    extends: extendsOptions
  } = base;
  const {
    mixins: globalMixins,
    optionsCache: cache,
    config: {
      optionMergeStrategies
    }
  } = instance.appContext;
  const cached = cache.get(base);
  let resolved;

  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};

    if (globalMixins.length) {
      globalMixins.forEach(m => mergeOptions(resolved, m, optionMergeStrategies, true));
    }

    mergeOptions(resolved, base, optionMergeStrategies);
  }

  if (isObject$1(base)) {
    cache.set(base, resolved);
  }

  return resolved;
}

function mergeOptions(to, from, strats) {
  let asMixin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  const {
    mixins,
    extends: extendsOptions
  } = from;

  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }

  if (mixins) {
    mixins.forEach(m => mergeOptions(to, m, strats, true));
  }

  for (const key in from) {
    if (asMixin && key === "expose") {
      !!(process.env.NODE_ENV !== "production") && warn$1(`"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`);
    } else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }

  return to;
}

const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeEmitsOrPropsOptions,
  emits: mergeEmitsOrPropsOptions,
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  watch: mergeWatchOptions,
  provide: mergeDataFn,
  inject: mergeInject
};

function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }

  if (!to) {
    return from;
  }

  return function mergedDataFn() {
    return extend(isFunction$1(to) ? to.call(this, this) : to, isFunction$1(from) ? from.call(this, this) : from);
  };
}

function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}

function normalizeInject(raw) {
  if (isArray(raw)) {
    const res = {};

    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }

    return res;
  }

  return raw;
}

function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}

function mergeObjectOptions(to, from) {
  return to ? extend(Object.create(null), to, from) : from;
}

function mergeEmitsOrPropsOptions(to, from) {
  if (to) {
    if (isArray(to) && isArray(from)) {
      return [...new Set([...to, ...from])];
    }

    return extend(Object.create(null), normalizePropsOrEmits(to), normalizePropsOrEmits(from != null ? from : {}));
  } else {
    return from;
  }
}

function mergeWatchOptions(to, from) {
  if (!to) return from;
  if (!from) return to;
  const merged = extend(Object.create(null), to);

  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }

  return merged;
}

let currentApp = null;

function inject(key, defaultValue) {
  let treatDefaultAsFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  const instance = currentInstance || currentRenderingInstance;

  if (instance || currentApp) {
    const provides = instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : currentApp._context.provides;

    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction$1(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
    } else if (!!(process.env.NODE_ENV !== "production")) {
      warn$1(`injection "${String(key)}" not found.`);
    }
  } else if (!!(process.env.NODE_ENV !== "production")) {
    warn$1(`inject() can only be used inside setup() or functional components.`);
  }
}

makeMap("String,Number,Boolean,Function,Symbol,BigInt");

const queuePostRenderEffect = queueEffectWithSuspense;

const isTeleport = type => type.__isTeleport;

const Fragment = Symbol.for("v-fgt");
const Text = Symbol.for("v-txt");
const Comment = Symbol.for("v-cmt");
let currentBlock = null;

function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}

const createVNodeWithArgsTransform = function () {
  for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }

  return _createVNode(...(args));
};

const InternalObjectKey = `__vInternal`;

const normalizeKey = _ref19 => {
  let {
    key
  } = _ref19;
  return key != null ? key : null;
};

const normalizeRef = _ref20 => {
  let {
    ref,
    ref_key,
    ref_for
  } = _ref20;

  if (typeof ref === "number") {
    ref = "" + ref;
  }

  return ref != null ? isString(ref) || isRef(ref) || isFunction$1(ref) ? {
    i: currentRenderingInstance,
    r: ref,
    k: ref_key,
    f: !!ref_for
  } : ref : null;
};

function createBaseVNode(type) {
  let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  let patchFlag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  let dynamicProps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  let shapeFlag = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : type === Fragment ? 0 : 1;
  let isBlockNode = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  let needFullChildrenNormalization = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
    ctx: currentRenderingInstance
  };

  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);

    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString(children) ? 8 : 16;
  }

  if (!!(process.env.NODE_ENV !== "production") && vnode.key !== vnode.key) {
    warn$1(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
  }

  if (!isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }

  return vnode;
}

const createVNode = !!(process.env.NODE_ENV !== "production") ? createVNodeWithArgsTransform : _createVNode;

function _createVNode(type) {
  let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  let patchFlag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  let dynamicProps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  let isBlockNode = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    if (!!(process.env.NODE_ENV !== "production") && !type) {
      warn$1(`Invalid vnode type when creating vnode: ${type}.`);
    }

    type = Comment;
  }

  if (isVNode(type)) {
    const cloned = cloneVNode(type, props, true);

    if (children) {
      normalizeChildren(cloned, children);
    }

    if (!isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }

    cloned.patchFlag |= -2;
    return cloned;
  }

  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }

  if (props) {
    props = guardReactiveProps(props);
    let {
      class: klass,
      style
    } = props;

    if (klass && !isString(klass)) {
      props.class = normalizeClass(klass);
    }

    if (isObject$1(style)) {
      if (isProxy(style) && !isArray(style)) {
        style = extend({}, style);
      }

      props.style = normalizeStyle(style);
    }
  }

  const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject$1(type) ? 4 : isFunction$1(type) ? 2 : 0;

  if (!!(process.env.NODE_ENV !== "production") && shapeFlag & 4 && isProxy(type)) {
    type = toRaw(type);
    warn$1(`Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`, `
Component that was made reactive: `, type);
  }

  return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}

function guardReactiveProps(props) {
  if (!props) return null;
  return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
}

function cloneVNode(vnode, extraProps) {
  let mergeRef = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  const {
    props,
    ref,
    patchFlag,
    children
  } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? mergeRef && ref ? isArray(ref) ? ref.concat(normalizeRef(extraProps)) : [ref, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children: !!(process.env.NODE_ENV !== "production") && patchFlag === -1 && isArray(children) ? children.map(deepCloneVNode) : children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx,
    ce: vnode.ce
  };
  return cloned;
}

function deepCloneVNode(vnode) {
  const cloned = cloneVNode(vnode);

  if (isArray(vnode.children)) {
    cloned.children = vnode.children.map(deepCloneVNode);
  }

  return cloned;
}

function createTextVNode() {
  let text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : " ";
  let flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return createVNode(Text, null, text, flag);
}

function normalizeChildren(vnode, children) {
  let type = 0;
  const {
    shapeFlag
  } = vnode;

  if (children == null) {
    children = null;
  } else if (isArray(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;

      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }

      return;
    } else {
      type = 32;
      const slotFlag = children._;

      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction$1(children)) {
    children = {
      default: children,
      _ctx: currentRenderingInstance
    };
    type = 32;
  } else {
    children = String(children);

    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }

  vnode.children = children;
  vnode.shapeFlag |= type;
}

function mergeProps() {
  const ret = {};

  for (let i = 0; i < arguments.length; i++) {
    const toMerge = i < 0 || arguments.length <= i ? undefined : arguments[i];

    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];

        if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }

  return ret;
}

let currentInstance = null;

let internalSetCurrentInstance;
{
  const g = getGlobalThis();

  const registerGlobalSetter = (key, setter) => {
    let setters;
    if (!(setters = g[key])) setters = g[key] = [];
    setters.push(setter);
    return v => {
      if (setters.length > 1) setters.forEach(set => set(v));else setters[0](v);
    };
  };

  internalSetCurrentInstance = registerGlobalSetter(`__VUE_INSTANCE_SETTERS__`, v => currentInstance = v);
  registerGlobalSetter(`__VUE_SSR_SETTERS__`, v => isInSSRComponentSetup = v);
}

const setCurrentInstance = instance => {
  const prev = currentInstance;
  internalSetCurrentInstance(instance);
  instance.scope.on();
  return () => {
    instance.scope.off();
    internalSetCurrentInstance(prev);
  };
};

makeMap("slot,component");

function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}

let isInSSRComponentSetup = false;

function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      },

      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }

    }));
  }
}

const classifyRE = /(?:^|[-_])(\w)/g;

const classify = str => str.replace(classifyRE, c => c.toUpperCase()).replace(/[-_]/g, "");

function getComponentName(Component) {
  let includeInferred = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return isFunction$1(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}

function formatComponentName(instance, Component) {
  let isRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  let name = getComponentName(Component);

  if (!name && Component.__file) {
    const match = Component.__file.match(/([^/\\]+)\.\w+$/);

    if (match) {
      name = match[1];
    }
  }

  if (!name && instance && instance.parent) {
    const inferFromRegistry = registry => {
      for (const key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };

    name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
  }

  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}

function isClassComponent(value) {
  return isFunction$1(value) && "__vccOpts" in value;
}

function initCustomFormatter() {
  if (!!!(process.env.NODE_ENV !== "production") || typeof window === "undefined") {
    return;
  }

  const vueStyle = {
    style: "color:#3ba776"
  };
  const numberStyle = {
    style: "color:#1677ff"
  };
  const stringStyle = {
    style: "color:#f5222d"
  };
  const keywordStyle = {
    style: "color:#eb2f96"
  };
  const formatter = {
    header(obj) {
      if (!isObject$1(obj)) {
        return null;
      }

      if (obj.__isVue) {
        return ["div", vueStyle, `VueInstance`];
      } else if (isRef(obj)) {
        return ["div", {}, ["span", vueStyle, genRefFlag(obj)], "<", formatValue(obj.value), `>`];
      } else if (isReactive(obj)) {
        return ["div", {}, ["span", vueStyle, isShallow(obj) ? "ShallowReactive" : "Reactive"], "<", formatValue(obj), `>${isReadonly(obj) ? ` (readonly)` : ``}`];
      } else if (isReadonly(obj)) {
        return ["div", {}, ["span", vueStyle, isShallow(obj) ? "ShallowReadonly" : "Readonly"], "<", formatValue(obj), ">"];
      }

      return null;
    },

    hasBody(obj) {
      return obj && obj.__isVue;
    },

    body(obj) {
      if (obj && obj.__isVue) {
        return ["div", {}, ...formatInstance(obj.$)];
      }
    }

  };

  function formatInstance(instance) {
    const blocks = [];

    if (instance.type.props && instance.props) {
      blocks.push(createInstanceBlock("props", toRaw(instance.props)));
    }

    if (instance.setupState !== EMPTY_OBJ) {
      blocks.push(createInstanceBlock("setup", instance.setupState));
    }

    if (instance.data !== EMPTY_OBJ) {
      blocks.push(createInstanceBlock("data", toRaw(instance.data)));
    }

    const computed = extractKeys(instance, "computed");

    if (computed) {
      blocks.push(createInstanceBlock("computed", computed));
    }

    const injected = extractKeys(instance, "inject");

    if (injected) {
      blocks.push(createInstanceBlock("injected", injected));
    }

    blocks.push(["div", {}, ["span", {
      style: keywordStyle.style + ";opacity:0.66"
    }, "$ (internal): "], ["object", {
      object: instance
    }]]);
    return blocks;
  }

  function createInstanceBlock(type, target) {
    target = extend({}, target);

    if (!Object.keys(target).length) {
      return ["span", {}];
    }

    return ["div", {
      style: "line-height:1.25em;margin-bottom:0.6em"
    }, ["div", {
      style: "color:#476582"
    }, type], ["div", {
      style: "padding-left:1.25em"
    }, ...Object.keys(target).map(key => {
      return ["div", {}, ["span", keywordStyle, key + ": "], formatValue(target[key], false)];
    })]];
  }

  function formatValue(v) {
    let asRaw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (typeof v === "number") {
      return ["span", numberStyle, v];
    } else if (typeof v === "string") {
      return ["span", stringStyle, JSON.stringify(v)];
    } else if (typeof v === "boolean") {
      return ["span", keywordStyle, v];
    } else if (isObject$1(v)) {
      return ["object", {
        object: asRaw ? toRaw(v) : v
      }];
    } else {
      return ["span", stringStyle, String(v)];
    }
  }

  function extractKeys(instance, type) {
    const Comp = instance.type;

    if (isFunction$1(Comp)) {
      return;
    }

    const extracted = {};

    for (const key in instance.ctx) {
      if (isKeyOfType(Comp, key, type)) {
        extracted[key] = instance.ctx[key];
      }
    }

    return extracted;
  }

  function isKeyOfType(Comp, key, type) {
    const opts = Comp[type];

    if (isArray(opts) && opts.includes(key) || isObject$1(opts) && key in opts) {
      return true;
    }

    if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
      return true;
    }

    if (Comp.mixins && Comp.mixins.some(m => isKeyOfType(m, key, type))) {
      return true;
    }
  }

  function genRefFlag(v) {
    if (isShallow(v)) {
      return `ShallowRef`;
    }

    if (v.effect) {
      return `ComputedRef`;
    }

    return `Ref`;
  }

  if (window.devtoolsFormatters) {
    window.devtoolsFormatters.push(formatter);
  } else {
    window.devtoolsFormatters = [formatter];
  }
}
!!(process.env.NODE_ENV !== "production") ? warn$1 : NOOP;
!!(process.env.NODE_ENV !== "production") || true ? devtools$1 : void 0;
!!(process.env.NODE_ENV !== "production") || true ? setDevtoolsHook$1 : NOOP;

/**
* vue v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/

function initDev() {
  {
    initCustomFormatter();
  }
}

if (!!(process.env.NODE_ENV !== "production")) {
  initDev();
}

function isFunction(val) {
  return typeof val === 'function';
}
function isObject(o) {
  return o !== null && typeof o === 'object' && !Array.isArray(o);
}
function normalizeValidatorObject(validator) {
  return isFunction(validator.$validator) ? _objectSpread2({}, validator) : {
    $validator: validator
  };
}
function isPromise(object) {
  return isObject(object) && isFunction(object.then);
}
function unwrapValidatorResponse(result) {
  if (typeof result === 'object') return result.$valid;
  return result;
}
function unwrapNormalizedValidator(validator) {
  return validator.$validator || validator;
}

function withParams($params, $validator) {
  if (!isObject($params)) throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof $params}`);
  if (!isObject($validator) && !isFunction($validator)) throw new Error(`[@vuelidate/validators]: Validator must be a function or object with $validator parameter`);
  const validatorObj = normalizeValidatorObject($validator);
  validatorObj.$params = _objectSpread2(_objectSpread2({}, validatorObj.$params || {}), $params);
  return validatorObj;
}

function withMessage($message, $validator) {
  if (!isFunction($message) && typeof unref($message) !== 'string') throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof $message}`);
  if (!isObject($validator) && !isFunction($validator)) throw new Error(`[@vuelidate/validators]: Validator must be a function or object with $validator parameter`);
  const validatorObj = normalizeValidatorObject($validator);
  validatorObj.$message = $message;
  return validatorObj;
}

function withAsync($validator) {
  let $watchTargets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const validatorObj = normalizeValidatorObject($validator);
  return _objectSpread2(_objectSpread2({}, validatorObj), {}, {
    $async: true,
    $watchTargets
  });
}

function forEach(validators) {
  return {
    $validator(collection) {
      for (var _len = arguments.length, others = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        others[_key - 1] = arguments[_key];
      }

      return unref(collection).reduce((previous, collectionItem, index) => {
        const collectionEntryResult = Object.entries(collectionItem).reduce((all, _ref) => {
          let [property, $model] = _ref;
          const innerValidators = validators[property] || {};
          const propertyResult = Object.entries(innerValidators).reduce((all, _ref2) => {
            let [validatorName, currentValidator] = _ref2;
            const validatorFunction = unwrapNormalizedValidator(currentValidator);
            const $response = validatorFunction.call(this, $model, collectionItem, index, ...others);
            const $valid = unwrapValidatorResponse($response);
            all.$data[validatorName] = $response;
            all.$data.$invalid = !$valid || !!all.$data.$invalid;
            all.$data.$error = all.$data.$invalid;

            if (!$valid) {
              let $message = currentValidator.$message || '';
              const $params = currentValidator.$params || {};

              if (typeof $message === 'function') {
                $message = $message({
                  $pending: false,
                  $invalid: !$valid,
                  $params,
                  $model,
                  $response
                });
              }

              all.$errors.push({
                $property: property,
                $message,
                $params,
                $response,
                $model,
                $pending: false,
                $validator: validatorName
              });
            }

            return {
              $valid: all.$valid && $valid,
              $data: all.$data,
              $errors: all.$errors
            };
          }, {
            $valid: true,
            $data: {},
            $errors: []
          });
          all.$data[property] = propertyResult.$data;
          all.$errors[property] = propertyResult.$errors;
          return {
            $valid: all.$valid && propertyResult.$valid,
            $data: all.$data,
            $errors: all.$errors
          };
        }, {
          $valid: true,
          $data: {},
          $errors: {}
        });
        return {
          $valid: previous.$valid && collectionEntryResult.$valid,
          $data: previous.$data.concat(collectionEntryResult.$data),
          $errors: previous.$errors.concat(collectionEntryResult.$errors)
        };
      }, {
        $valid: true,
        $data: [],
        $errors: []
      });
    },

    $message: _ref3 => {
      let {
        $response
      } = _ref3;
      return $response ? $response.$errors.map(context => {
        return Object.values(context).map(errors => errors.map(error => error.$message)).reduce((a, b) => a.concat(b), []);
      }) : [];
    }
  };
}

const req = value => {
  value = unref(value);
  if (Array.isArray(value)) return !!value.length;

  if (value === undefined || value === null) {
    return false;
  }

  if (value === false) {
    return true;
  }

  if (value instanceof Date) {
    return !isNaN(value.getTime());
  }

  if (typeof value === 'object') {
    for (let _ in value) return true;

    return false;
  }

  return !!String(value).length;
};
const len = value => {
  value = unref(value);
  if (Array.isArray(value)) return value.length;

  if (typeof value === 'object') {
    return Object.keys(value).length;
  }

  return String(value).length;
};
function regex() {
  for (var _len = arguments.length, expr = new Array(_len), _key = 0; _key < _len; _key++) {
    expr[_key] = arguments[_key];
  }

  return value => {
    value = unref(value);
    return !req(value) || expr.every(reg => {
      reg.lastIndex = 0;
      return reg.test(value);
    });
  };
}

var common = /*#__PURE__*/Object.freeze({
  __proto__: null,
  forEach: forEach,
  len: len,
  normalizeValidatorObject: normalizeValidatorObject,
  regex: regex,
  req: req,
  unwrap: unref,
  unwrapNormalizedValidator: unwrapNormalizedValidator,
  unwrapValidatorResponse: unwrapValidatorResponse,
  withAsync: withAsync,
  withMessage: withMessage,
  withParams: withParams
});

var alpha$1 = regex(/^[a-zA-Z]*$/);

var alpha = {
  $validator: alpha$1,
  $message: 'The value is not alphabetical',
  $params: {
    type: 'alpha'
  }
};

var alphaNum$1 = regex(/^[a-zA-Z0-9]*$/);

var alphaNum = {
  $validator: alphaNum$1,
  $message: 'The value must be alpha-numeric',
  $params: {
    type: 'alphaNum'
  }
};

var numeric$1 = regex(/^\d*(\.\d+)?$/);

var numeric = {
  $validator: numeric$1,
  $message: 'Value must be numeric',
  $params: {
    type: 'numeric'
  }
};

function between$1 (min, max) {
  return value => !req(value) || (!/\s/.test(value) || value instanceof Date) && +unref(min) <= +value && +unref(max) >= +value;
}

function between (min, max) {
  return {
    $validator: between$1(min, max),
    $message: _ref => {
      let {
        $params
      } = _ref;
      return `The value must be between ${$params.min} and ${$params.max}`;
    },
    $params: {
      min,
      max,
      type: 'between'
    }
  };
}

const emailRegex = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
var email$1 = regex(emailRegex);

var email = {
  $validator: email$1,
  $message: 'Value is not a valid email address',
  $params: {
    type: 'email'
  }
};

function ipAddress$1 (value) {
  if (!req(value)) {
    return true;
  }

  if (typeof value !== 'string') {
    return false;
  }

  const nibbles = value.split('.');
  return nibbles.length === 4 && nibbles.every(nibbleValid);
}

const nibbleValid = nibble => {
  if (nibble.length > 3 || nibble.length === 0) {
    return false;
  }

  if (nibble[0] === '0' && nibble !== '0') {
    return false;
  }

  if (!nibble.match(/^\d+$/)) {
    return false;
  }

  const numeric = +nibble | 0;
  return numeric >= 0 && numeric <= 255;
};

var ipAddress = {
  $validator: ipAddress$1,
  $message: 'The value is not a valid IP address',
  $params: {
    type: 'ipAddress'
  }
};

function macAddress$1 () {
  let separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ':';
  return value => {
    separator = unref(separator);

    if (!req(value)) {
      return true;
    }

    if (typeof value !== 'string') {
      return false;
    }

    const parts = typeof separator === 'string' && separator !== '' ? value.split(separator) : value.length === 12 || value.length === 16 ? value.match(/.{2}/g) : null;
    return parts !== null && (parts.length === 6 || parts.length === 8) && parts.every(hexValid);
  };
}

const hexValid = hex => hex.toLowerCase().match(/^[0-9a-f]{2}$/);

function macAddress (separator) {
  return {
    $validator: macAddress$1(separator),
    $message: 'The value is not a valid MAC Address',
    $params: {
      type: 'macAddress'
    }
  };
}

function maxLength$1 (length) {
  return value => !req(value) || len(value) <= unref(length);
}

function maxLength (max) {
  return {
    $validator: maxLength$1(max),
    $message: _ref => {
      let {
        $params
      } = _ref;
      return `The maximum length allowed is ${$params.max}`;
    },
    $params: {
      max,
      type: 'maxLength'
    }
  };
}

function minLength$1 (length) {
  return value => !req(value) || len(value) >= unref(length);
}

function minLength (min) {
  return {
    $validator: minLength$1(min),
    $message: _ref => {
      let {
        $params
      } = _ref;
      return `This field should be at least ${$params.min} characters long`;
    },
    $params: {
      min,
      type: 'minLength'
    }
  };
}

function required$1 (value) {
  if (typeof value === 'string') {
    value = value.trim();
  }

  return req(value);
}

var required = {
  $validator: required$1,
  $message: 'Value is required',
  $params: {
    type: 'required'
  }
};

const validate$1 = (prop, val) => prop ? req(typeof val === 'string' ? val.trim() : val) : true;

function requiredIf$1(propOrFunction) {
  return function (value, parentVM) {
    if (typeof propOrFunction !== 'function') {
      return validate$1(unref(propOrFunction), value);
    }

    const result = propOrFunction.call(this, value, parentVM);
    return validate$1(result, value);
  };
}

function requiredIf (prop) {
  return {
    $validator: requiredIf$1(prop),
    $message: 'The value is required',
    $params: {
      type: 'requiredIf',
      prop
    }
  };
}

const validate = (prop, val) => !prop ? req(typeof val === 'string' ? val.trim() : val) : true;

function requiredUnless$1(propOrFunction) {
  return function (value, parentVM) {
    if (typeof propOrFunction !== 'function') {
      return validate(unref(propOrFunction), value);
    }

    const result = propOrFunction.call(this, value, parentVM);
    return validate(result, value);
  };
}

function requiredUnless (prop) {
  return {
    $validator: requiredUnless$1(prop),
    $message: 'The value is required',
    $params: {
      type: 'requiredUnless',
      prop
    }
  };
}

function sameAs$1 (equalTo) {
  return value => unref(value) === unref(equalTo);
}

function sameAs (equalTo) {
  let otherName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'other';
  return {
    $validator: sameAs$1(equalTo),
    $message: _ref => {
      return `The value must be equal to the ${otherName} value`;
    },
    $params: {
      equalTo,
      otherName,
      type: 'sameAs'
    }
  };
}

const urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
var url$1 = regex(urlRegex);

var url = {
  $validator: url$1,
  $message: 'The value is not a valid URL address',
  $params: {
    type: 'url'
  }
};

function syncOr(validators) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return validators.reduce((valid, fn) => {
      if (unwrapValidatorResponse(valid)) return valid;
      return unwrapNormalizedValidator(fn).apply(this, args);
    }, false);
  };
}

function asyncOr(validators) {
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.reduce(async (valid, fn) => {
      const r = await valid;
      if (unwrapValidatorResponse(r)) return r;
      return unwrapNormalizedValidator(fn).apply(this, args);
    }, Promise.resolve(false));
  };
}

function or$1() {
  for (var _len3 = arguments.length, validators = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    validators[_key3] = arguments[_key3];
  }

  const $async = validators.some(v => v.$async);
  const $watchTargets = validators.reduce((all, v) => {
    if (!v.$watchTargets) return all;
    return all.concat(v.$watchTargets);
  }, []);

  let $validator = () => false;

  if (validators.length) $validator = $async ? asyncOr(validators) : syncOr(validators);
  return {
    $async,
    $validator,
    $watchTargets
  };
}

function or () {
  return withParams({
    type: 'or'
  }, withMessage('The value does not match any of the provided validators', or$1(...arguments)));
}

function syncAnd(validators) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return validators.reduce((valid, fn) => {
      if (!unwrapValidatorResponse(valid)) return valid;
      return unwrapNormalizedValidator(fn).apply(this, args);
    }, true);
  };
}

function asyncAnd(validators) {
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.reduce(async (valid, fn) => {
      const r = await valid;
      if (!unwrapValidatorResponse(r)) return r;
      return unwrapNormalizedValidator(fn).apply(this, args);
    }, Promise.resolve(true));
  };
}

function and$1() {
  for (var _len3 = arguments.length, validators = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    validators[_key3] = arguments[_key3];
  }

  const $async = validators.some(v => v.$async);
  const $watchTargets = validators.reduce((all, v) => {
    if (!v.$watchTargets) return all;
    return all.concat(v.$watchTargets);
  }, []);

  let $validator = () => false;

  if (validators.length) $validator = $async ? asyncAnd(validators) : syncAnd(validators);
  return {
    $async,
    $validator,
    $watchTargets
  };
}

function and () {
  return withParams({
    type: 'and'
  }, withMessage('The value does not match all of the provided validators', and$1(...arguments)));
}

function not$1 (validator) {
  return function (value, vm) {
    if (!req(value)) return true;
    const response = unwrapNormalizedValidator(validator).call(this, value, vm);
    if (!isPromise(response)) return !unwrapValidatorResponse(response);
    return response.then(r => !unwrapValidatorResponse(r));
  };
}

function not (validator) {
  return {
    $validator: not$1(validator),
    $message: `The value does not match the provided validator`,
    $params: {
      type: 'not'
    }
  };
}

function minValue$1 (min) {
  return value => !req(value) || (!/\s/.test(value) || value instanceof Date) && +value >= +unref(min);
}

function minValue (min) {
  return {
    $validator: minValue$1(min),
    $message: _ref => {
      let {
        $params
      } = _ref;
      return `The minimum value allowed is ${$params.min}`;
    },
    $params: {
      min,
      type: 'minValue'
    }
  };
}

function maxValue$1 (max) {
  return value => !req(value) || (!/\s/.test(value) || value instanceof Date) && +value <= +unref(max);
}

var maxValue = (max => ({
  $validator: maxValue$1(max),
  $message: _ref => {
    let {
      $params
    } = _ref;
    return `The maximum value allowed is ${$params.max}`;
  },
  $params: {
    max,
    type: 'maxValue'
  }
}));

var integer$1 = regex(/(^[0-9]*$)|(^-[0-9]+$)/);

var integer = {
  $validator: integer$1,
  $message: 'Value is not an integer',
  $params: {
    type: 'integer'
  }
};

var decimal$1 = regex(/^[-]?\d*(\.\d+)?$/);

var decimal = {
  $validator: decimal$1,
  $message: 'Value must be decimal',
  $params: {
    type: 'decimal'
  }
};

function createI18nMessage(_ref) {
  let {
    t,
    messagePath = _ref2 => {
      let {
        $validator
      } = _ref2;
      return `validations.${$validator}`;
    },
    messageParams = params => params
  } = _ref;
  return function withI18nMessage(validator) {
    let {
      withArguments = false,
      messagePath: localMessagePath = messagePath,
      messageParams: localMessageParams = messageParams
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    function message(props) {
      return t(localMessagePath(props), localMessageParams(_objectSpread2({
        model: props.$model,
        property: props.$property,
        pending: props.$pending,
        invalid: props.$invalid,
        response: props.$response,
        validator: props.$validator,
        propertyPath: props.$propertyPath
      }, props.$params)));
    }

    if (withArguments && typeof validator === 'function') {
      return function () {
        return withMessage(message, validator(...arguments));
      };
    }

    return withMessage(message, validator);
  };
}

exports.alpha = alpha;
exports.alphaNum = alphaNum;
exports.and = and;
exports.between = between;
exports.createI18nMessage = createI18nMessage;
exports.decimal = decimal;
exports.email = email;
exports.helpers = common;
exports.integer = integer;
exports.ipAddress = ipAddress;
exports.macAddress = macAddress;
exports.maxLength = maxLength;
exports.maxValue = maxValue;
exports.minLength = minLength;
exports.minValue = minValue;
exports.not = not;
exports.numeric = numeric;
exports.or = or;
exports.required = required;
exports.requiredIf = requiredIf;
exports.requiredUnless = requiredUnless;
exports.sameAs = sameAs;
exports.url = url;
