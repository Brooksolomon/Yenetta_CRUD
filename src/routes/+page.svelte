<script>
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
function submitForm(event){
   //Preventing page refresh
   event.preventDefault();
   }
export let data
const {products} = data

//category choice
let value = 0;
</script>
	<h1 class="text-center text-4xl mt-8 font-mono">Product Management System</h1>
	<div class="mygrid">
		<div class="inputs text-left mt-8 ml-8">
			
			<!--create a Product and pass information to the backend on the server side so that we can update the databse-->
			<form method="POST" id='formId' action="?/CreateProduct">
				<label class="label font-mono">
					<span class="mb-40">Product name</span>
					<br>
					<input class="input w-96" title="Input (text)" type="text" placeholder="Eg. Xiaomi" required name='name' />
					<br><br>
				</label>

				<label class="label font-mono">
					<span>Descripton</span>
					<br>
					<textarea class="textarea w-96" rows="4" placeholder="Eg. Android phone made in china" required name='description'/>
					<br><br>
				</label>

				<label class="label font-mono">
					<span>Price</span>
					<br>
					<input class="input w-96" title="Input (text)" type="text" placeholder="Eg. 20000"required name='price'/>
					<br><br>
				</label>

				<label class="label font-mono">
					<span>Quantity in stock</span>
					<br>
					<input class="input w-96" title="Input (text)" type="text" placeholder="Eg. 4" required name='quantity'/>
					<br><br>
				</label>

				<button type="submit" class="btn variant-filled-surface ml-20 w-48 hover:variant-filled-primary">Add product</button>
			</form>

		</div>
		<div class="mt-12 font-mono">
			<div class="mb-8">
				<!--The toogle between in-stock and out of stock items to group them-->
				<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
					<RadioItem bind:group={value} name="justify" value={0}>All</RadioItem>
					<RadioItem bind:group={value} name="justify" value={1}>In-Stock</RadioItem>
					<RadioItem bind:group={value} name="justify" value={2}>Out-of-Stock</RadioItem>
				</RadioGroup>
			</div>
	
		<div class="table-container">
			<!--using table to display the list in an organized manner -->
			<table class="table  table-comfortable table-interactive">
				<thead>
					<tr>
						<th>Name</th>
						<th>Descripton</th>
						<th>Price</th>
						<th>Availablity</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{#each products as p }
						{#if p.in_stock && value!=2}
						<tr class="table-row-checked">
							<td>{p.name}</td>
							<td>{p.description}</td>
							<td>${p.price}</td>
							<td>In-stock</td>
							<td>
								<a href="/{p.id}">
									<button class="btn variant-filled-primary w-24 hover:variant-filled-surface">Edit</button>
								</a>
							</td>
							<td>
							<form method="POST" action="?/DeleteProduct"> <input type="text" hidden name="id" value={p.id}> <button class="btn variant-filled-primary w-24 hover:variant-filled-surface">Delete</button></form>
							</td>
						</tr>
						{:else if !p.in_stock && value!=1}
						<tr>
							<td>{p.name}</td>
							<td>{p.description}</td>
							<td>${p.price}</td>
							<td>Out-of-Stock</td>
							<td>
								<a href="/{p.id}">
									<button class="btn variant-filled-primary w-24 hover:variant-filled-surface">Edit</button>
								</a>
							</td>
							<td>
							<form method="POST" action="?/DeleteProduct"> <input type="text" hidden name="id" value={p.id}> <button class="btn variant-filled-primary w-24 hover:variant-filled-surface">Delete</button></form>
							</td>
						</tr>
						{/if}

					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
<style>
	.mygrid{
		display: grid;
		grid-template-columns: auto auto auto;
	}
</style>