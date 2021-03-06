export default class ApiService {
  static FetchData(token) {
    return fetch("http://127.0.0.1:8000/articles/", {
      method: "GET",
      //method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    }).then((response) => response.json());
  }
  static AddArticle(body, token) {
    //console.log(article_id, body)
    return fetch(`http://127.0.0.1:8000/articles/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }
  static UpdateArticle(article_id, body, token) {
    //console.log(article_id, body)
    return fetch(`http://127.0.0.1:8000/articles/${article_id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }
  static DeleteArticle(article_id, token) {
    //console.log(article_id, body)
    return fetch(`http://127.0.0.1:8000/articles/${article_id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
  }

  static AddUser(body) {
    //console.log(article_id, body)
    return fetch(`http://127.0.0.1:8000/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => {
      //console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        return { error: "error" };
      }
    });
  }
  static LogIn(body) {
    return fetch("http://127.0.0.1:8000/login/", {
      method: "POST",
      //method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }
  static LogOut(token) {
    return fetch("http://127.0.0.1:8000/logout/", {
      //'method': 'POST',
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    }).then((response) => response.json());
  }
}
