<?php
	$object = new Tiger();
	
	echo "Tiger have ...<br>";
	echo "Fur:" . $object->fur . "<br>";
	echo "Stripe:" . $object->stripes;
	
	class Wildcat
	{
		public $fur;
		function __construct()
		{
			$this->fur = "TURE";
		}
	}
	
	class Tiger extends Wildcat
	{
		public $stripes;
		function __construct()
		{
			parent::__construct();
			$this->stripes = "TRUE";
		}
	}
	
?>