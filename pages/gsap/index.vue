<script lang="ts" setup>
const { $gsap, $Draggable } = useNuxtApp();
let gsapInsA: any;
onMounted(() => {

    gsapInsA = $gsap.from('.box-A', {
        x: 300,
        opacity: 0.2,
        stagger: 0.2,
        zoom: 0.2,
    })
})

onBeforeUnmount(() => {
    if (gsapInsA) {
        gsapInsA.kill();
    }
})
// ---------
const b_isUp = ref(true)
function playB() {
    const y_action = b_isUp.value ? 300 : 0;
    $gsap.to('.box-B', {
        y: y_action,
        duration: 1,
        ease: 'bounce.out',
    })
    b_isUp.value = !b_isUp.value;
}
// -------------
function playC() {
    // https://gsap.com/resources/getting-started/Staggers
    $gsap.to(".box-C", 1, {
        duration: 1,
        scale: 0.1,
        y: 60,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
        delay: -0.3,
        stagger: {
            amount: 1.5,
            grid: 'auto', // [5,13], //[rows, columns]
            axis: undefined, // null, 'x', 'y'
            ease: 'none',
            from: 'center', // 'center', 'end','edges','random','11'()
        }
    });
}
// ------------- D
onMounted(() => {
    console.log($Draggable, $Draggable.create);
    $Draggable.create('.box-D-1', { bounds: '.wrap-D' });
    $Draggable.create('.box-D-2', { bounds: '.wrap-D', type: 'y'});//inertia: true
    $Draggable.create('.box-D-3', { bounds: '.wrap-D', type: 'rotation' });
})

</script>

<template>
    <div class="view-height-box">
        <div class="box box-A bc-red"></div>
        <div class="box box-A bc-yellow"></div>
        <div class="box box-A bc-green"></div>
    </div>
    <div class="view-height-box">
        <div class="box box-B bc-lightblue r-50%!"></div>
        <button @click="playB">play</button>
    </div>
    <div class="view-height-box">
        <div class="box-grid">
            <div class="box box-C bc-lightgreen" v-for="box in 48" :key="'boxc' + box"></div>
        </div>
        <button @click="playC">play</button>
    </div>

    <div class="view-height-box wrap-D flex gap-20">
        <div class="box box-D-1 bc-yellow"> drag me</div>
        <div class="box box-D-2 bc-pink">flick me</div>
        <div class="box box-D-3 bc-purple">spin me</div>
    </div>
</template>

<style lang="scss" scoped>
.view-height-box {
    width: 100%;
    height: 100vh;
    background-color: #333;
    border: 1px solid olivedrab;


    .box {
        width: 60px;
        height: 60px;
        border-radius: 4px;
    }

    .box-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, 60px);
        gap: 8px;
    }
}
</style>