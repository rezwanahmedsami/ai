const _0x295e=['voice\x20is\x20activated,\x20you\x20can\x20to\x20\x20miceophone','question','i\x20dont\x20understand\x20what\x20you\x20said!','length','search','onstart','270jAMVJC','speak','resultIndex','162982WaKhWE','can\x20you\x20please\x20say\x20clearly,\x20what\x20you\x20want\x20to\x20tell\x20me','_newtab','querySelector','.talk','639JvFJXG','494874xklESQ','487550vcIHBC','7URGVAY','224053XpyZxL','webkitSpeechRecognition','i\x20dont\x20understand,\x20what\x20you\x20want\x20to\x20tell\x20me?','SpeechRecognition','transcript','ans','click','7vaIigc','log','continuous','803815cGteiZ','floor','79829bjrgJW','link','pros..','results','start','.content','textContent','toLowerCase','onresult','i\x20dont\x20understand\x20what\x20you\x20mean','json','addEventListener'];const _0xe963dc=_0x3319;function _0x3319(_0x5746ac,_0x7fce55){_0x5746ac=_0x5746ac-0xe7;let _0x295e36=_0x295e[_0x5746ac];return _0x295e36;}(function(_0x21aae0,_0x34f3fb){const _0x419462=_0x3319;while(!![]){try{const _0x223c1e=parseInt(_0x419462(0xee))+-parseInt(_0x419462(0xf1))+parseInt(_0x419462(0xfb))+parseInt(_0x419462(0xef))+parseInt(_0x419462(0xed))*-parseInt(_0x419462(0x10f))+parseInt(_0x419462(0xe8))*-parseInt(_0x419462(0xf8))+-parseInt(_0x419462(0xf0))*-parseInt(_0x419462(0xfd));if(_0x223c1e===_0x34f3fb)break;else _0x21aae0['push'](_0x21aae0['shift']());}catch(_0x315642){_0x21aae0['push'](_0x21aae0['shift']());}}}(_0x295e,0xc52a1));const noans=[_0xe963dc(0x106),_0xe963dc(0xf3),_0xe963dc(0x10b),_0xe963dc(0xe9),'what'],search=document['getElementById'](_0xe963dc(0x10d)),btn=document['querySelector'](_0xe963dc(0xec)),content=document[_0xe963dc(0xeb)](_0xe963dc(0x102)),SpeechRecognition=window[_0xe963dc(0xf4)]||window[_0xe963dc(0xf2)],recognition=new SpeechRecognition();recognition[_0xe963dc(0xfa)]=!![];function playText(_0x2e1632){const _0x566bfb=_0xe963dc,_0x42f291=new SpeechSynthesisUtterance(_0x2e1632);speechSynthesis[_0x566bfb(0x110)](_0x42f291);}recognition[_0xe963dc(0x10e)]=function(){const _0x737d81=_0xe963dc;console[_0x737d81(0xf9)](_0x737d81(0x109));},recognition[_0xe963dc(0x105)]=function(_0x5dc165){const _0xf10ece=_0xe963dc,_0x39ae00=_0x5dc165[_0xf10ece(0xe7)],_0x8a2e78=_0x5dc165[_0xf10ece(0x100)][_0x39ae00][0x0][_0xf10ece(0xf5)],_0x176cb6=_0x8a2e78[_0xf10ece(0x104)]();content[_0xf10ece(0x103)]=_0x176cb6,api(_0x176cb6);},btn[_0xe963dc(0x108)](_0xe963dc(0xf7),function(){const _0x220231=_0xe963dc;recognition[_0x220231(0x101)]();});async function api(_0x1a764f){const _0x26938d=_0xe963dc,_0xfa705b=await fetch('qna.json'),_0x28642f=await _0xfa705b[_0x26938d(0x107)]();if(_0x1a764f!='')switch(_0x1a764f){case _0x28642f[0x0][_0x26938d(0x10a)]:console['log'](_0x26938d(0xff)),playText(_0x28642f[0x0]['ans']);break;case _0x28642f[0x1][_0x26938d(0x10a)]:console[_0x26938d(0xf9)]('pros..'),playText(_0x28642f[0x1]['ans']);break;case _0x28642f[0x2]['question']:console[_0x26938d(0xf9)]('pros..'),playText(_0x28642f[0x2][_0x26938d(0xf6)]);break;case _0x28642f[0x3]['question']:console[_0x26938d(0xf9)](_0x26938d(0xff)),playText(_0x28642f[0x3][_0x26938d(0xf6)]),setTimeout(()=>{const _0x27bbad=_0x26938d;window['open'](_0x28642f[0x3][_0x27bbad(0xfe)],_0x27bbad(0xea));},0x7d0);break;default:playText(noans[Math[_0x26938d(0xfc)](Math['random']()*noans[_0x26938d(0x10c)])]);break;}}
