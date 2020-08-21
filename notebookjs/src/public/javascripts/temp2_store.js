var json ={"cell-1":{"in":"var data = [[1,2,3],[3,4,5],[6,7,8]]\n\nvar df = new dfd.DataFrame(data, {columns: [\"A\",\"B\",\"C\"]})\n\ntable(df)","out":"\n    <div style=\"overflow: auto; max-height: 300px;\"><table class=\"df-table\" border=\"1\">\n      <thead>\n        <tr>\n          <th></th>\n          <th class=\"int32\">A</th><th class=\"int32\">B</th><th class=\"int32\">C</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><th>0</th><td class=\"int32\">1</td><td class=\"int32\">2</td><td class=\"int32\">3</td></tr><tr><th>1</th><td class=\"int32\">3</td><td class=\"int32\">4</td><td class=\"int32\">5</td></tr><tr><th>2</th><td class=\"int32\">6</td><td class=\"int32\">7</td><td class=\"int32\">8</td></tr>\n      </tbody>\n    </table>\n    </div>\n  "},"cell-2":{"out":"\n            <div class=\"col-md-1\">\n                 <p id=\"cell-num\" class=\"code_symbol\">[2]</p>\n            </div>\n\n            <div id=\"text-div_2\" class=\"col-md-9\" style=\"display: none;\"><grammarly-extension style=\"position: absolute; top: 0px; left: 0px; pointer-events: none;\" class=\"_1KJtL\"></grammarly-extension>\n                <div id=\"btn-actions-2\" class=\"btn-group-horizontal\" style=\"margin-bottom: 2px; display: none;\">\n                    <button type=\"button\" id=\"run_md_div-2\" class=\"btn btn-sm btn-success run\"><i class=\"fas fa-play\"></i>\n                        Run</button>\n                    <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                        <button type=\"button\" id=\"add_code_down_btn-2\" class=\"btn btn-sm  btn-info add-code\">\n                            <i class=\"fas fa-sort-down\" style=\"margin-top: -10px;\"></i> Code\n                        </button>\n                        <button type=\"button\" id=\"add_code_up_btn-2\" class=\"btn btn-sm btn-info add-code\">\n                            <i class=\"fas fa-sort-up\"></i> Code\n                        </button>\n                    </div>\n\n                    <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                        <button type=\"button\" id=\"add_text_down_btn-2\" class=\"btn btn-sm btn-info add-text\">\n                            <i class=\"fas fa-sort-down\" style=\"margin-top: -10px;\"></i> Text\n                        </button>\n                        <button type=\"button\" id=\"add_text_up_btn-2\" class=\"btn btn-sm btn-info add-text\">\n                            <i class=\"fas fa-sort-up\"></i> Text\n                        </button>\n                    </div>\n\n                    <button type=\"button\" id=\"del-text_2\" class=\"btn btn-sm btn-danger del\"><i class=\"fas fa-trash-alt\"></i>\n                    </button>\n                </div>\n\n                <textarea id=\"text-box_2\" class=\"text-box\" style=\"height: 40px; overflow-y: hidden;\" spellcheck=\"false\"></textarea>\n            </div>\n            <div class=\"col-md-2\"></div>\n            <div class=\"col-md-1\"></div>\n            <div id=\"out-text-div_2\" style=\"\" class=\"col-md-9 text-out-box\"><h2>Data Visualisation</h2>\n</div>\n            <div class=\"col-md-2\"></div>\n\n        ","md":"## Data Visualisation"},"cell-3":{"in":"var f = df[\"B\"].cumsum()\nviz(\"violin\", x=>{\n\tf.plot(x).violin()\n})","out":"\n\n    <div id=\"violin\" class=\"js-plotly-plot\"><div class=\"plot-container plotly\"><div class=\"svg-container\" style=\"position: relative; width: 770.938px; height: 450px;\"><svg class=\"main-svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"770.938\" height=\"450\" style=\"background: rgb(255, 255, 255);\"><defs id=\"defs-8a09a7\"><g class=\"clips\"><clipPath id=\"clip8a09a7xyplot\" class=\"plotclip\"><rect width=\"611\" height=\"270\"></rect></clipPath><clipPath class=\"axesclip\" id=\"clip8a09a7x\"><rect x=\"80\" y=\"0\" width=\"611\" height=\"450\"></rect></clipPath><clipPath class=\"axesclip\" id=\"clip8a09a7y\"><rect x=\"0\" y=\"100\" width=\"770.938\" height=\"270\"></rect></clipPath><clipPath class=\"axesclip\" id=\"clip8a09a7xy\"><rect x=\"80\" y=\"100\" width=\"611\" height=\"270\"></rect></clipPath></g><g class=\"gradients\"></g></defs><g class=\"bglayer\"></g><g class=\"draglayer cursor-crosshair\"><g class=\"xy\"><rect class=\"nsewdrag drag\" data-subplot=\"xy\" x=\"80\" y=\"100\" width=\"611\" height=\"270\" style=\"fill: transparent; stroke-width: 0; pointer-events: all;\"></rect><rect class=\"nwdrag drag cursor-nw-resize\" data-subplot=\"xy\" x=\"60\" y=\"80\" width=\"20\" height=\"20\" style=\"fill: transparent; stroke-width: 0; pointer-events: all;\"></rect><rect class=\"nedrag drag cursor-ne-resize\" data-subplot=\"xy\" x=\"691\" y=\"80\" width=\"20\" height=\"20\" style=\"fill: transparent; stroke-width: 0; pointer-events: all;\"></rect><rect class=\"swdrag drag cursor-sw-resize\" data-subplot=\"xy\" x=\"60\" y=\"370\" width=\"20\" height=\"20\" style=\"fill: transparent; stroke-width: 0; pointer-events: all;\"></rect><rect class=\"sedrag drag cursor-se-resize\" data-subplot=\"xy\" x=\"691\" y=\"370\" width=\"20\" height=\"20\" style=\"fill: transparent; stroke-width: 0; pointer-events: all;\"></rect><rect class=\"ewdrag drag cursor-ew-resize\" data-subplot=\"xy\" x=\"141.1\" y=\"370.5\" width=\"488.8\" height=\"20\" style=\"fill: transparent; stroke-width: 0; pointer-events: all;\"></rect><rect class=\"wdrag drag cursor-w-resize\" data-subplot=\"xy\" x=\"80\" y=\"370.5\" width=\"61.1\" height=\"20\" style=\"fill: transparent; stroke-width: 0; pointer-events: all;\"></rect><rect class=\"edrag drag cursor-e-resize\" data-subplot=\"xy\" x=\"629.9\" y=\"370.5\" width=\"61.1\" height=\"20\" style=\"fill: transparent; stroke-width: 0; pointer-events: all;\"></rect><rect class=\"nsdrag drag cursor-ns-resize\" data-subplot=\"xy\" x=\"59.5\" y=\"127\" width=\"20\" height=\"216\" style=\"fill: transparent; stroke-width: 0; pointer-events: all;\"></rect><rect class=\"sdrag drag cursor-s-resize\" data-subplot=\"xy\" x=\"59.5\" y=\"343\" width=\"20\" height=\"27\" style=\"fill: transparent; stroke-width: 0; pointer-events: all;\"></rect><rect class=\"ndrag drag cursor-n-resize\" data-subplot=\"xy\" x=\"59.5\" y=\"100\" width=\"20\" height=\"27\" style=\"fill: transparent; stroke-width: 0; pointer-events: all;\"></rect></g></g><g class=\"layer-below\"><g class=\"imagelayer\"></g><g class=\"shapelayer\"></g></g><g class=\"cartesianlayer\"><g class=\"subplot xy\"><g class=\"layer-subplot\"><g class=\"shapelayer\"></g><g class=\"imagelayer\"></g></g><g class=\"gridlayer\"><g class=\"x\"></g><g class=\"y\"><path class=\"ygrid crisp\" transform=\"translate(0,336.48)\" d=\"M80,0h611\" style=\"stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;\"></path><path class=\"ygrid crisp\" transform=\"translate(0,255.3)\" d=\"M80,0h611\" style=\"stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;\"></path><path class=\"ygrid crisp\" transform=\"translate(0,214.7)\" d=\"M80,0h611\" style=\"stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;\"></path><path class=\"ygrid crisp\" transform=\"translate(0,174.11)\" d=\"M80,0h611\" style=\"stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;\"></path><path class=\"ygrid crisp\" transform=\"translate(0,133.52)\" d=\"M80,0h611\" style=\"stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;\"></path></g></g><g class=\"zerolinelayer\"><path class=\"yzl zl crisp\" transform=\"translate(0,295.89)\" d=\"M80,0h611\" style=\"stroke: rgb(68, 68, 68); stroke-opacity: 1; stroke-width: 1px;\"></path></g><path class=\"xlines-below\"></path><path class=\"ylines-below\"></path><g class=\"overlines-below\"></g><g class=\"xaxislayer-below\"></g><g class=\"yaxislayer-below\"></g><g class=\"overaxes-below\"></g><g class=\"plot\" transform=\"translate(80, 100)\" clip-path=\"url('#clip8a09a7xyplot')\"><g class=\"violinlayer mlayer\"><g class=\"trace violins\" style=\"opacity: 1;\"><path class=\"violin\" d=\"M316.73,256.5Q322.94,247.77 326.96,243.71C331.42,239.2 336.83,234.99 342.58,230.92C348.93,226.42 356.25,222.27 363.63,218.13C371.49,213.73 380.12,209.59 388.43,205.34C396.79,201.06 405.64,196.95 413.64,192.55C421.16,188.41 428.87,184.34 435.12,179.76C440.6,175.74 446.04,171.62 449.45,166.97C452.36,162.99 454.6,158.53 455.2,154.18C455.77,150 454.7,145.52 453.27,141.39C451.74,136.98 448.84,132.76 446,128.61C443,124.22 439.33,120 435.6,115.82C431.71,111.47 427.51,107.21 423.08,103.03C418.45,98.67 413.53,94.41 408.35,90.24C402.93,85.87 397.11,81.65 391.22,77.45C385.14,73.12 378.66,68.93 372.4,64.66C366.15,60.4 359.66,56.22 353.67,51.87C347.93,47.69 342.18,43.51 337.15,39.08C332.47,34.96 328.03,30.73 324.35,26.29Q320.94,22.18 315.62,13.5L295.38,13.5Q290.06,22.18 286.65,26.29C282.97,30.73 278.53,34.96 273.85,39.08C268.82,43.51 263.07,47.69 257.33,51.87C251.34,56.22 244.85,60.4 238.6,64.66C232.34,68.93 225.86,73.12 219.78,77.45C213.89,81.65 208.07,85.87 202.65,90.24C197.47,94.41 192.55,98.67 187.92,103.03C183.49,107.21 179.29,111.47 175.4,115.82C171.67,120 168,124.22 165,128.61C162.16,132.76 159.25,136.98 157.73,141.39C156.3,145.52 155.24,150 155.81,154.18C156.41,158.53 158.64,162.99 161.55,166.97C164.96,171.63 170.4,175.74 175.88,179.76C182.13,184.34 189.84,188.41 197.36,192.55C205.36,196.95 214.21,201.06 222.57,205.34C230.88,209.59 239.51,213.73 247.37,218.13C254.75,222.27 262.07,226.42 268.42,230.92C274.17,234.99 279.58,239.2 284.04,243.71Q288.06,247.77 294.27,256.5Z\" style=\"vector-effect: non-scaling-stroke; stroke-width: 2px; stroke: rgb(31, 119, 180); stroke-opacity: 1; fill: rgb(31, 119, 180); fill-opacity: 0.5;\"></path><g class=\"points\"></g></g></g></g><g class=\"overplot\"></g><path class=\"xlines-above crisp\" d=\"M0,0\" style=\"fill: none;\"></path><path class=\"ylines-above crisp\" d=\"M0,0\" style=\"fill: none;\"></path><g class=\"overlines-above\"></g><g class=\"xaxislayer-above\"><g class=\"xtick\"><text text-anchor=\"middle\" x=\"0\" y=\"383\" data-unformatted=\"trace 0\" data-math=\"N\" transform=\"translate(385.5,0)\" style=\"font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre;\">trace 0</text></g></g><g class=\"yaxislayer-above\"><g class=\"ytick\"><text text-anchor=\"end\" x=\"79\" y=\"4.199999999999999\" data-unformatted=\"−5\" data-math=\"N\" transform=\"translate(0,336.48)\" style=\"font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre;\">−5</text></g><g class=\"ytick\"><text text-anchor=\"end\" x=\"79\" y=\"4.199999999999999\" data-unformatted=\"0\" data-math=\"N\" transform=\"translate(0,295.89)\" style=\"font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre;\">0</text></g><g class=\"ytick\"><text text-anchor=\"end\" x=\"79\" y=\"4.199999999999999\" data-unformatted=\"5\" data-math=\"N\" transform=\"translate(0,255.3)\" style=\"font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre;\">5</text></g><g class=\"ytick\"><text text-anchor=\"end\" x=\"79\" y=\"4.199999999999999\" data-unformatted=\"10\" data-math=\"N\" transform=\"translate(0,214.7)\" style=\"font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre;\">10</text></g><g class=\"ytick\"><text text-anchor=\"end\" x=\"79\" y=\"4.199999999999999\" data-unformatted=\"15\" data-math=\"N\" transform=\"translate(0,174.11)\" style=\"font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre;\">15</text></g><g class=\"ytick\"><text text-anchor=\"end\" x=\"79\" y=\"4.199999999999999\" data-unformatted=\"20\" data-math=\"N\" transform=\"translate(0,133.52)\" style=\"font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre;\">20</text></g></g><g class=\"overaxes-above\"></g></g></g><g class=\"polarlayer\"></g><g class=\"ternarylayer\"></g><g class=\"geolayer\"></g><g class=\"funnelarealayer\"></g><g class=\"pielayer\"></g><g class=\"treemaplayer\"></g><g class=\"sunburstlayer\"></g><g class=\"glimages\"></g></svg><div class=\"gl-container\"></div><svg class=\"main-svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"770.938\" height=\"450\"><defs id=\"topdefs-8a09a7\"><g class=\"clips\"></g></defs><g class=\"indicatorlayer\"></g><g class=\"layer-above\"><g class=\"imagelayer\"></g><g class=\"shapelayer\"></g></g><g class=\"infolayer\"><g class=\"g-gtitle\"></g><g class=\"g-xtitle\"></g><g class=\"g-ytitle\"></g></g><g class=\"menulayer\"></g><g class=\"zoomlayer\"></g></svg><div class=\"modebar-container\" style=\"position: absolute; top: 0px; right: 0px; width: 100%;\"><div id=\"modebar-8a09a7\" class=\"modebar modebar--hover ease-bg\"><div class=\"modebar-group\"><a rel=\"tooltip\" class=\"modebar-btn\" data-title=\"Download plot as a png\" data-toggle=\"false\" data-gravity=\"n\"><svg viewBox=\"0 0 1000 1000\" class=\"icon\" height=\"1em\" width=\"1em\"><path d=\"m500 450c-83 0-150-67-150-150 0-83 67-150 150-150 83 0 150 67 150 150 0 83-67 150-150 150z m400 150h-120c-16 0-34 13-39 29l-31 93c-6 15-23 28-40 28h-340c-16 0-34-13-39-28l-31-94c-6-15-23-28-40-28h-120c-55 0-100-45-100-100v-450c0-55 45-100 100-100h800c55 0 100 45 100 100v450c0 55-45 100-100 100z m-400-550c-138 0-250 112-250 250 0 138 112 250 250 250 138 0 250-112 250-250 0-138-112-250-250-250z m365 380c-19 0-35 16-35 35 0 19 16 35 35 35 19 0 35-16 35-35 0-19-16-35-35-35z\" transform=\"matrix(1 0 0 -1 0 850)\"></path></svg></a></div><div class=\"modebar-group\"><a rel=\"tooltip\" class=\"modebar-btn active\" data-title=\"Zoom\" data-attr=\"dragmode\" data-val=\"zoom\" data-toggle=\"false\" data-gravity=\"n\"><svg viewBox=\"0 0 1000 1000\" class=\"icon\" height=\"1em\" width=\"1em\"><path d=\"m1000-25l-250 251c40 63 63 138 63 218 0 224-182 406-407 406-224 0-406-182-406-406s183-406 407-406c80 0 155 22 218 62l250-250 125 125z m-812 250l0 438 437 0 0-438-437 0z m62 375l313 0 0-312-313 0 0 312z\" transform=\"matrix(1 0 0 -1 0 850)\"></path></svg></a><a rel=\"tooltip\" class=\"modebar-btn\" data-title=\"Pan\" data-attr=\"dragmode\" data-val=\"pan\" data-toggle=\"false\" data-gravity=\"n\"><svg viewBox=\"0 0 1000 1000\" class=\"icon\" height=\"1em\" width=\"1em\"><path d=\"m1000 350l-187 188 0-125-250 0 0 250 125 0-188 187-187-187 125 0 0-250-250 0 0 125-188-188 186-187 0 125 252 0 0-250-125 0 187-188 188 188-125 0 0 250 250 0 0-126 187 188z\" transform=\"matrix(1 0 0 -1 0 850)\"></path></svg></a></div><div class=\"modebar-group\"><a rel=\"tooltip\" class=\"modebar-btn\" data-title=\"Zoom in\" data-attr=\"zoom\" data-val=\"in\" data-toggle=\"false\" data-gravity=\"n\"><svg viewBox=\"0 0 875 1000\" class=\"icon\" height=\"1em\" width=\"1em\"><path d=\"m1 787l0-875 875 0 0 875-875 0z m687-500l-187 0 0-187-125 0 0 187-188 0 0 125 188 0 0 187 125 0 0-187 187 0 0-125z\" transform=\"matrix(1 0 0 -1 0 850)\"></path></svg></a><a rel=\"tooltip\" class=\"modebar-btn\" data-title=\"Zoom out\" data-attr=\"zoom\" data-val=\"out\" data-toggle=\"false\" data-gravity=\"n\"><svg viewBox=\"0 0 875 1000\" class=\"icon\" height=\"1em\" width=\"1em\"><path d=\"m0 788l0-876 875 0 0 876-875 0z m688-500l-500 0 0 125 500 0 0-125z\" transform=\"matrix(1 0 0 -1 0 850)\"></path></svg></a><a rel=\"tooltip\" class=\"modebar-btn\" data-title=\"Autoscale\" data-attr=\"zoom\" data-val=\"auto\" data-toggle=\"false\" data-gravity=\"n\"><svg viewBox=\"0 0 1000 1000\" class=\"icon\" height=\"1em\" width=\"1em\"><path d=\"m250 850l-187 0-63 0 0-62 0-188 63 0 0 188 187 0 0 62z m688 0l-188 0 0-62 188 0 0-188 62 0 0 188 0 62-62 0z m-875-938l0 188-63 0 0-188 0-62 63 0 187 0 0 62-187 0z m875 188l0-188-188 0 0-62 188 0 62 0 0 62 0 188-62 0z m-125 188l-1 0-93-94-156 156 156 156 92-93 2 0 0 250-250 0 0-2 93-92-156-156-156 156 94 92 0 2-250 0 0-250 0 0 93 93 157-156-157-156-93 94 0 0 0-250 250 0 0 0-94 93 156 157 156-157-93-93 0 0 250 0 0 250z\" transform=\"matrix(1 0 0 -1 0 850)\"></path></svg></a><a rel=\"tooltip\" class=\"modebar-btn\" data-title=\"Reset axes\" data-attr=\"zoom\" data-val=\"reset\" data-toggle=\"false\" data-gravity=\"n\"><svg viewBox=\"0 0 928.6 1000\" class=\"icon\" height=\"1em\" width=\"1em\"><path d=\"m786 296v-267q0-15-11-26t-25-10h-214v214h-143v-214h-214q-15 0-25 10t-11 26v267q0 1 0 2t0 2l321 264 321-264q1-1 1-4z m124 39l-34-41q-5-5-12-6h-2q-7 0-12 3l-386 322-386-322q-7-4-13-4-7 2-12 7l-35 41q-4 5-3 13t6 12l401 334q18 15 42 15t43-15l136-114v109q0 8 5 13t13 5h107q8 0 13-5t5-13v-227l122-102q5-5 6-12t-4-13z\" transform=\"matrix(1 0 0 -1 0 850)\"></path></svg></a></div><div class=\"modebar-group\"><a rel=\"tooltip\" class=\"modebar-btn\" data-title=\"Toggle Spike Lines\" data-attr=\"_cartesianSpikesEnabled\" data-val=\"on\" data-toggle=\"false\" data-gravity=\"n\"><svg viewBox=\"0 0 1000 1000\" class=\"icon\" height=\"1em\" width=\"1em\"><path d=\"M512 409c0-57-46-104-103-104-57 0-104 47-104 104 0 57 47 103 104 103 57 0 103-46 103-103z m-327-39l92 0 0 92-92 0z m-185 0l92 0 0 92-92 0z m370-186l92 0 0 93-92 0z m0-184l92 0 0 92-92 0z\" transform=\"matrix(1.5 0 0 -1.5 0 850)\"></path></svg></a><a rel=\"tooltip\" class=\"modebar-btn\" data-title=\"Show closest data on hover\" data-attr=\"hovermode\" data-val=\"closest\" data-toggle=\"false\" data-gravity=\"ne\"><svg viewBox=\"0 0 1500 1000\" class=\"icon\" height=\"1em\" width=\"1em\"><path d=\"m375 725l0 0-375-375 375-374 0-1 1125 0 0 750-1125 0z\" transform=\"matrix(1 0 0 -1 0 850)\"></path></svg></a><a rel=\"tooltip\" class=\"modebar-btn active\" data-title=\"Compare data on hover\" data-attr=\"hovermode\" data-val=\"x\" data-toggle=\"false\" data-gravity=\"ne\"><svg viewBox=\"0 0 1125 1000\" class=\"icon\" height=\"1em\" width=\"1em\"><path d=\"m187 786l0 2-187-188 188-187 0 0 937 0 0 373-938 0z m0-499l0 1-187-188 188-188 0 0 937 0 0 376-938-1z\" transform=\"matrix(1 0 0 -1 0 850)\"></path></svg></a></div><div class=\"modebar-group\"><a href=\"https://plotly.com/\" target=\"_blank\" data-title=\"Produced with Plotly\" class=\"modebar-btn plotlyjsicon modebar-btn--logo\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 132 132\" height=\"1em\" width=\"1em\"><defs><style>.cls-1 {fill: #3f4f75;} .cls-2 {fill: #80cfbe;} .cls-3 {fill: #fff;}</style></defs><title>plotly-logomark</title><g id=\"symbol\"><rect class=\"cls-1\" width=\"132\" height=\"132\" rx=\"6\" ry=\"6\"></rect><circle class=\"cls-2\" cx=\"78\" cy=\"54\" r=\"6\"></circle><circle class=\"cls-2\" cx=\"102\" cy=\"30\" r=\"6\"></circle><circle class=\"cls-2\" cx=\"78\" cy=\"30\" r=\"6\"></circle><circle class=\"cls-2\" cx=\"54\" cy=\"30\" r=\"6\"></circle><circle class=\"cls-2\" cx=\"30\" cy=\"30\" r=\"6\"></circle><circle class=\"cls-2\" cx=\"30\" cy=\"54\" r=\"6\"></circle><path class=\"cls-3\" d=\"M30,72a6,6,0,0,0-6,6v24a6,6,0,0,0,12,0V78A6,6,0,0,0,30,72Z\"></path><path class=\"cls-3\" d=\"M78,72a6,6,0,0,0-6,6v24a6,6,0,0,0,12,0V78A6,6,0,0,0,78,72Z\"></path><path class=\"cls-3\" d=\"M54,48a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V54A6,6,0,0,0,54,48Z\"></path><path class=\"cls-3\" d=\"M102,48a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V54A6,6,0,0,0,102,48Z\"></path></g></svg></a></div></div></div><svg class=\"main-svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"770.938\" height=\"450\"><g class=\"hoverlayer\"></g></svg></div></div></div>"}}