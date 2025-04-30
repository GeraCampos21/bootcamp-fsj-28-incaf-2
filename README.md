# bootcamp-fsj-28-incaf-2

Practicando comandos en las ramas
Para iniciar y configurar un repositorio:

git init: Inicializa un nuevo repositorio de Git en el directorio actual.
git clone <URL>: Clona un repositorio existente desde una URL remota.   
Para gestionar cambios:

git add <archivo(s)>: Añade uno o varios archivos al área de staging (preparación) para el próximo commit. Puedes usar git add . para añadir todos los cambios en el directorio actual y sus subdirectorios.
git commit -m "<mensaje>": Guarda los cambios en el repositorio local con un mensaje descriptivo.
git status: Muestra el estado del directorio de trabajo y del área de staging, indicando qué archivos han sido modificados, staged o no están siendo rastreados.
git diff: Muestra las diferencias entre el directorio de trabajo, el área de staging y la última commit.
git rm <archivo(s)>: Elimina archivos del directorio de trabajo y los prepara para ser eliminados del repositorio en el próximo commit.
git mv <archivo_antiguo> <archivo_nuevo>: Renombra un archivo y prepara el cambio para el próximo commit.
Para trabajar con ramas:
probando para el token
git branch: Lista las ramas locales.
git branch <nombre_de_rama>: Crea una nueva rama local.
git checkout <nombre_de_rama>: Cambia a la rama especificada.
git checkout -b <nombre_de_rama>: Crea una nueva rama y cambia a ella.
git merge <nombre_de_rama>: Fusiona la rama especificada con la rama actual.
git branch -d <nombre_de_rama>: Elimina una rama local (si ya ha sido mergeada).
git branch -D <nombre_de_rama>: Fuerza la eliminación de una rama local (incluso si no ha sido mergeada).
Para interactuar con repositorios remotos:

git remote add <nombre> <URL>: Añade un nuevo repositorio remoto con un nombre.
git remote -v: Lista los repositorios remotos y sus URLs.
git push <remoto> <rama>: Envía los commits de tu rama local a la rama especificada en el repositorio remoto.
git pull <remoto> <rama>: Descarga los cambios de la rama especificada del repositorio remoto y los fusiona con tu rama local actual.
git fetch <remoto>: Descarga los commits y objetos del repositorio remoto, pero no intenta integrarlos en tus ramas locales.
Para inspeccionar el historial:

git log: Muestra el historial de commits. Tiene muchas opciones para filtrar y formatear la salida.
git show <commit>: Muestra información detallada sobre un commit específico.
git reflog: Muestra un registro de los movimientos del HEAD y las ramas.
Para deshacer cambios:

git reset --soft <commit>: Restaura el HEAD a la commit especificada, pero mantiene los cambios en el área de staging.
git reset --mixed <commit>: Restaura el HEAD a la commit especificada y elimina los cambios del área de staging, pero mantiene los cambios en el directorio de trabajo.
git reset --hard <commit>: Restaura el HEAD a la commit especificada y elimina todos los cambios del área de staging y del directorio de trabajo (¡cuidado, esto puede perder datos!).
git revert <commit>: Crea un nuevo commit que deshace los cambios introducidos por el commit especificado.
