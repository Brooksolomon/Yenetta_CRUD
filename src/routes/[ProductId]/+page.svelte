<script>
import { SlideToggle, getToastStore } from '@skeletonlabs/skeleton';
import {goto} from '$app/navigation'
//fetching data form the back end
export let data
//reactive variable
$: toggleOn = data.in_stock
</script>
<div class="text-center font-mono text-xl">
    <h1 class='mt-8'>IN-STOCK</h1>

    <!--The toggle to put an item out of stock-->
    {#if toggleOn}
        <SlideToggle name="slider-large" checked active="bg-primary-500"  size="xs" label='instock' on:change={()=>toggleOn=!toggleOn}/>
    {:else}
        <SlideToggle name="slider-large"  active="bg-primary-500"  size="xs" label='instock' on:change={()=>toggleOn=!toggleOn}/>
    {/if}
</div>
<div class="inputs text-left mt-8 ">
    <!--a form that fetches the previous data based on the the current route and fills in the feilds-->
    <form method="post" id='formId' action="?/UpdateProduct">
        <input value={data.id} hidden name="id">
        <input bind:value={toggleOn} hidden name='Stock'>
        <div class="mygrid ml-96">
            <label class="label font-mono text-2xl">
                <span class="mb-96">Product name</span>
                <br>
                <input class="input w-96" title="Input (text)" type="text" placeholder="Eg. Xiaomi" required name='name' value={data.name} />
                <br><br>
            </label>

            <label class="label font-mono text-2xl">
                <span>Descripton</span>
                <br>
                <textarea class="textarea w-96" rows="4" placeholder="Eg. Android phone made in china" required name='description' value={data.description}/>
                <br><br>
            </label>

            <label class="label font-mono text-2xl">
                <span>Price</span>
                <br>
                <input class="input w-96" title="Input (text)" type="text" placeholder="Eg. 20000"required name='price' value={data.price}/>
                <br><br>
            </label>

            <label class="label font-mono text-2xl">
                <span>Quantity in stock</span>
                <br>
                <input class="input w-96" title="Input (text)" type="text" placeholder="Eg. 4" required name='quantity' value={data.quantity}/>
                <br><br>
            </label>
        </div>
        <div class="text-center">
            <a href="/">
                <button  class="btn variant-filled-surface w-48 hover:variant-filled-primary text-center" >go back</button>
            </a>
            <button type="submit" class="btn variant-filled-primary w-48 hover:variant-filled-surface text-center ml-8" on:click={()=>goto('/')} >Update product</button>
        </div>
    </form>

</div>
<style>
.mygrid{
		display: grid;
		grid-template-columns: auto auto ;
	}
</style>