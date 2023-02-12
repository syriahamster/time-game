<script>
</script>
<div class="">
	<!-- <div class="ad-example upper">상단광고 냠냠</div> -->
	<div class="flex justify-center items-center"></div>
	<div class="flex flex-row-reverse mb-2 p-4">

	</div>
	<div class="flex justify-center items-center dark:text-white">
		<slot />
	</div>
	<div class="ad-example lower">하단광고 냠냠</div>
</div>

<style>
.ad-example {
	background-color: rgba(255,255,255,0.3);
	width : 100%;
	height: 120px;
	margin: 20px 10px;
}
</style>