import "./styles.css";

const onClickAdd = () => {
  //textを取得
  const inputText = document.getElementById("add-text").value;
  if (!inputText) {
    alert("TODOを入力してください");
    return;
  }
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  //li生成
  const li = document.createElement("li");
  li.innerText = text;
  //button生成
  const completeButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  completeButton.innerText = "完了";
  deleteButton.innerText = "削除";
  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.parentNode;

    const completeDiv = document.createElement("div");
    completeDiv.className = "list-row";

    const todoText = completeTarget.querySelector("li").innerText;
    const completeLi = document.createElement("li");
    completeLi.innerText = todoText;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //推された戻すボタンの親タグを削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    completeDiv.appendChild(completeLi);
    completeDiv.appendChild(backButton);

    console.log(completeDiv);

    document.getElementById("complete-list").appendChild(completeDiv);
    deleteFromIncompleteList(completeTarget);
  });
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
