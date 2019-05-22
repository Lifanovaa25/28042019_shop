<?php
    include ($_SERVER['DOCUMENT_ROOT'] . "/modules/head.php");
    include ($_SERVER['DOCUMENT_ROOT'] . "/modules/menu.php");
    include ($_SERVER['DOCUMENT_ROOT'] . "/php/connect.php");
    include ($_SERVER['DOCUMENT_ROOT'] . "/modules/breadcrumbs.php");


    $id = (isset($_GET['id'])) ? $_GET['id'] : 1;


    $query = "SELECT * FROM `catalog` 
                    WHERE `id` = {$id}";
    
    $detID = mysqli_query($db, $query);  
?>
      <main>
         
            <!-- <section class="details">
                <div class="det-pic" style="background-image: url('/images/catalog/9.jpg')"></div>
                <div class="det-title">Кеды с полоской</div>
                <div class="det-code">Артикул: 385904</div>
                <div class="det-price">4500 руб.</div>
                <div class="det-description">
                    Отличные кеды из водонепроницаемого материала. Отлично подходят для любой погоды. Приятно сидят на ноге, стильные и комфортные.
                </div>
                <div class="details-size">
                    <p class="details-size__text details-size__text_margin">Размер</p>
                    <span class="details-size__item details-size__item_margin">38</span>
                    <span class="details-size__item details-size__item_margin">39</span>
                    <span class="details-size__item details-size__item_margin">40</span>
                    <span class="details-size__item details-size__item_margin">41</span>
                    <span class="details-size__item details-size__item_margin">42</span>
                </div>
                <div class="button">Добавить в корзину</div> -->
            <!-- </section> -->
        </main>
<?php
    include ($_SERVER['DOCUMENT_ROOT'] . '/modules/footer.php');
?>