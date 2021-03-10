<script context="module">
	export async function preload() {
		const res = await (this.fetch('https://jsonplaceholder.typicode.com/users'));
		const users = await res.json()

		return { users }
	}
</script>

<script>
	import { Users, UsersTh, UsersTr, UsersTbody, UsersThead, UsersTd }  from '../components/Users/users.js'
	import Search from '../components/Search/Search.svelte'
	import { getFlattenData } from '../infrastructure/core/getFlattenData'
	import { getFlattenObjectDeep } from '../infrastructure/core/getFlattenObjectDeep'
	import { userFieldAliases } from '../domain/users/data/userFieldAliases'
	import { searchUsers } from '../domain/users/search/searchUsers'

	export let users
	const flattenUsers = getFlattenData({ data: users, getFlattenObjectDeep })
	const fields = Object.keys(flattenUsers[0])

	$: search = ""
	$: searchedUsers = [...flattenUsers]

	const searchUsersHandler = event => {
		if(!event.detail) return
		search = event.detail
		searchedUsers = searchUsers({ search, data: flattenUsers })
	}
</script>

<svelte:head>
	<title>Users list</title>
</svelte:head>

<Users>
	<Search on:search={searchUsersHandler} />
	<UsersThead slot='thead'>
		{#each fields as field}
			<UsersTh>{userFieldAliases[field]}</UsersTh>
		{/each}
	</UsersThead>
	<UsersTbody slot='tbody'>
		{#each searchedUsers as user}
			<UsersTr>
				{#each Object.keys(user) as field}
					<UsersTd>{user[field]}</UsersTd>
				{/each}
			</UsersTr>
		{/each}
	</UsersTbody>
</Users>
