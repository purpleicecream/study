<?php
	$object = new Son;
	$object->test();
	$object->test2();
	
	class Dad
	{
		function test()
		{
			echo "[class Dad] I am your father!<br>";
		}
	}
	
	class Son extends Dad
	{
		function test()
		{
			echo "[class son] I am your luke!<br>";
		}
		
		function test2()
		{
			Dad::test();
		}
	}
	
?>


