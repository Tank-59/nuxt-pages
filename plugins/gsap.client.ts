import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Draggable } from 'gsap/Draggable'


export default defineNuxtPlugin((nuxtApp) => {

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(Draggable); // InertiaPlugin  

    return {
        provide: {
            gsap,
            ScrollTrigger,
            Draggable,
        }
    }
})