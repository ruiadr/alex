<?php
    header('ALEX_0: "Bon, faut pas déconner, il n\'y a plus rien a voir ici!"');

    $dh = opendir ('.');
    while (false !== ($filename = readdir ($dh))) {
        if (in_array ($filename, array ('.', '..'))) {
            continue;
        }
        $files[] = $filename;
    }
    sort ($files);
?>
<!DOCTYPE html>
<html lang="fr-FR" role="document">
    <head>
        <title>Fichiers présents sur le serveur</title>
        <meta robots="noindex,nofollow" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="canonical" href="et_les_fichiers_alors.php" />
    </head>
    <body>
        <h1>Fichiers du répertoire</h1>
        <ul>
            <?php foreach ($files as $file):?>
                <li>
                    <a href="<?php echo $file;?>" title="Ouvrir le fichier \"<?php echo $file;?>\""><?php echo $file;?></a>
                </li>
            <?php endforeach;?>
        </ul>
    </body>
</html>