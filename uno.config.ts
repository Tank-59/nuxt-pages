import { defineConfig, presetUno } from 'unocss'
const rules: any = [
    [
        /^m([trblxy])-([\.\d]+)(px|rem|em|%)?$/,
        ([, dir, num, unit]: any) => {
            let _unit = unit || 'px';
            switch (dir) {
                case 't':
                    return {
                        'margin-top': `${num}${_unit}`
                    }
                case 'r':
                    return {
                        'margin-right': `${num}${_unit}`
                    }
                case 'b':
                    return {
                        'margin-bottom': `${num}${_unit}`
                    }
                case 'l':
                    return {
                        'margin-left': `${num}${_unit}`
                    }
                case 'x':
                    return {
                        'margin-left': `${num}${_unit}`,
                        'margin-right': `${num}${_unit}`
                    }
                case 'y':
                    return {
                        'margin-top': `${num}${_unit}`,
                        'margin-bottom': `${num}${_unit}`
                    }
            }
        }
    ],
    [
        /^m([trblxy])-auto$/,
        ([, dir]: any) => {
            switch (dir) {
                case 't':
                    return {
                        'margin-top': 'auto'
                    }
                case 'r':
                    return {
                        'margin-right': 'auto'
                    }
                case 'b':
                    return {
                        'margin-bottom': 'auto'
                    }
                case 'l':
                    return {
                        'margin-left': 'auto'
                    }
                case 'x':
                    return {
                        'margin-left': 'auto',
                        'margin-right': 'auto'
                    }
                case 'y':
                    return {
                        'margin-top': 'auto',
                        'margin-bottom': 'auto'
                    }
            }


        }
    ],
    [
        /^m-([\.\d]+)(px|rem|em|%)?$/,
        ([, num, unit]: any) => {
            let _unit = unit || 'px';
            return {
                'margin': `${num}${_unit}`
            }

        }
    ],
    [
        /^p([trblxy])-([\.\d]+)(px|rem|em|%)?$/,
        ([, dir, num, unit]: any) => {

            let _unit = unit || 'px';
            switch (dir) {
                case 't':
                    return {
                        'padding-top': `${num}${_unit}`
                    }
                case 'r':
                    return {
                        'padding-right': `${num}${_unit}`
                    }
                case 'b':
                    return {
                        'padding-bottom': `${num}${_unit}`
                    }
                case 'l':
                    return {
                        'padding-left': `${num}${_unit}`
                    }
                case 'x':
                    return {
                        'padding-left': `${num}${_unit}`,
                        'padding-right': `${num}${_unit}`
                    }
                case 'y':
                    return {
                        'padding-top': `${num}${_unit}`,
                        'padding-bottom': `${num}${_unit}`
                    }
            }
        }
    ],
    [
        /^p-([\.\d]+)(px|rem|em|%)?$/,
        ([, num, unit]: any) => {
            let _unit = unit || 'px';
            return {
                'padding': `${num}${_unit}`
            }

        }
    ],

    //flex
    [
        /^gap-x-(\d+)(px|rem|em|%)?$/,
        ([, d, u]: any) => {
            let unit = u ? u : `px`;
            return {
                '-webkit-column-gap': `${d}${unit}`,
                '-moz-column-gap': `${d}${unit}`,
                'grid-column-gap': `${d}${unit}`,
                'column-gap': `${d}${unit}`,
            };
        },
    ],
    [
        /^gap-y-(\d+)(px|rem|em|%)?$/,
        ([, d, u]: any) => {
            let unit = u ? u : `px`;
            return {
                '-webkit-row-gap': `${d}${unit}`,
                '-moz-row-gap': `${d}${unit}`,
                'grid-row-gap': `${d}${unit}`,
                'row-gap': `${d}${unit}`,
            };
        },
    ],


    [
        /^tw-(\d+)$/,
        ([, d]: any) => ({
            'font-weight': `${d}`,
        }),
    ],


    [
        /^t-(\d+)(px|rem|em)?$/,
        ([, d, unit]: any) => {
            let _u = unit || 'px';
            return {

                'font-size': `${d}${_u}`,
            }
        }
    ],
    [
        /^c-(.*)$/,
        ([, d]: any) => ({
            'color': `${d}`,
        }),
    ],
    [
        /^bc-(.*)$/,
        ([, d]: any) => ({
            'background-color': `${d}`,
        }),
    ],
    [
        /^bd-(\d+)-(.*)$/,
        ([, d, c]: any) => ({
            'border': `${d}px solid ${c}`,
        }),
    ],
    [
        /^([wh])-(\d+)(.*)$/,
        ([, size, d, u]: any) => {

            let _u = u || 'px';
            if (size == 'w') {
                return {
                    'width': `${d}${_u}`,
                }
            } else {
                return {
                    'height': `${d}${_u}`,
                }
            }
        },
    ],
    [
        /^max-w-(\d+)(.*)$/,
        ([, d, u]: any) => {
            let _u = u || 'px';
            return {
                'max-width': `${d}${_u}`,
            }
        },
    ],
    [
        /^min-w-(\d+)(.*)$/,
        ([, d, u]: any) => {
            let _u = u || 'px';
            return ({
                'min-width': `${d}${_u}`,
            })
        }
    ],
    [
        /^max-h-(\d+)(.*)$/,
        ([, d, u]: any) => {
            let _u = u || 'px';
            return ({
                'max-height': `${d}${_u}`,
            })
        }
    ],
    [
        /^min-h-(\d+)(.*)$/,
        ([, d, u]: any) => {
            let _u = u || 'px';
            return {
                'min-height': `${d}${u}`,
            }
        }
    ],

    [
        /^w-full$/,
        ([, d, u]: any) => ({
            'width': `100%`,
        }),
    ],
    [
        /^h-full$/,
        ([, d, u]: any) => ({
            'height': `100%`,
        }),
    ],
    [
        /^r-(.*)$/,
        ([, d]: any) => {
            let _u = d || 'px';
            return {
                'border-radius': `${_u}`,
            }
        }
    ],
    //frame-work
    [
        /^framework-(\d+)-(.*)$/,
        ([, d, color]: any) => {

            return {
                border: `${d}px solid ${color}`,
            }
        }
    ],

]
export default defineConfig({
    // ...UnoCSS option
    presets: [presetUno()],
    theme: {
        // ...
        breakpoints: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            xxl: '1440px'
        },
    },
    rules,
})