<script>
import {page} from "$app/stores"
export let form; 

</script>
<section class="container mx-auto px-4 py-4">
<div class="flex flex-col justify-center items-center min-h-[40rem]">
<h1 class="text-4xl text-slate-500">Sveltekit Forms</h1>


<div class="w-3/6 mt-4 rounded-sm p-8 bg-slate-100 ">
<form class="my-4 " action="?/contactUs" method= "POST">
 <div>
 
 <label class="label text-slate-500 mr-4" for="name">Name </label>
<input type="text" name="name" placeholder="Type here" class="ring-1 ring-slate-200 focus:outline-none rounded-sm input w-full"  />
   {#if form?.errors?.name }
    <span class="py-2 px-1 text-red-400">{form?.errors?.name[0]}</span>
   {/if}
 </div>
 <div>
 <label class="label text-slate-500 mr-4" for="name">Email </label>
   <input type="email" name="email" placeholder="Type here" class="ring-1 ring-slate-200 focus:outline-none rounded-sm input w-full" />
   {#if form?.errors?.email }
    <span class="py-2 px-1 text-red-400">{form?.errors?.email[0]}</span>
   {/if}
 </div>
 <div>
 <label class="label text-slate-500 mr-4" for="name">Message </label>
   <textarea name="message" class="textarea ring-1 ring-slate-200 focus:outline-none rounded-sm w-full" placeholder="Message" ></textarea>
      
   {#if form?.errors?.message }
    <span class="py-2 px-1 text-red-400">{form?.errors?.message[0]}</span>
   {/if}
 </div>
 <div>
   <button type="submit" class="mt-2 w-1/4 btn px-8 rounded-sm btn-outline">Send</button>
 </div>
</form>
</div>

</div>
</section>