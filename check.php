<? php
$username = $_GET["username"];
require "../config.php";
require "../Model.class.php";

$model = new Model("users");

$data = $model->where("username='".$username."'")->select();

if (empty($data)) {
  echo 0;
}else {
  echo 1;
}
