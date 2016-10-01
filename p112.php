<?php
	$object = new Subscriber;
	$object->name = "Fred";
	$object->password = "password";
	$object->phone = "13253596521";
	$object->email = "fred@BLOGGS.com";
	$object->display();
	
	class User
	{
		public $name, $password;
		function save_user()
		{
			echo "Save User Code goes here";
		}
	}
	
	class Subscriber extends User
	{
		public $phone, $email;
		function display()
		{
			echo "name:" . $this->name . "<br />";
			echo "password:" . $this->password . "<br />";
			echo "phone:" . $this->phone . "<br />";
			echo "email:" . $this->email;
		}
	}
	
?>