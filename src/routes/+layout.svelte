<script>
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-2xl uppercase text-mono">Brook Solomon</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/Brooksolomon"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://leetcode.com/brooksolo/"
					target="_blank"
					rel="noreferrer"
				>
					Leetcode
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://t.me/brooksolo"
					target="_blank"
					rel="noreferrer"
				>
					Telegram
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
