import React from "react";

function TasksList({ tasks }) {
  return (
    <div
      style={{
        background: "#eee",
        padding: "1em",
        width: "90%",
        margin: "auto",
        marginTop: "1em",
        marginBottom: "2em",
      }}
    >
      <ul class="list-group">
        {tasks.map((task) => {
          const toJMA = (date) => {
            return {
              jour: date.getDay(),
              mois: date.getMonth(),
              annee: date.getFullYear(),
            };
          };
          const formatDate = (jma) => {
            const { jour, mois, annee } = jma;
            return jour + "/" + mois + "/" + annee;
          };
          const getStateString = (state) => {
            if (state === "pending") {
              return "En Attente";
            }
            return "En Attente";
          };
          const date = new Date(task.createdAt);
          const jour = date.getDay();
          const mois = date.getMonth();
          const annee = date.getFullYear();
          return (
            <div
              class="list-group-item"
              style={{
                marginBottom: "0.25em",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <dd style={{ fontWeight: "bold", flex: 1 }}>Intitulé</dd>
                <dl style={{ flex: 4 }}>{task.title}</dl>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <dd style={{ fontWeight: "bold", flex: 1 }}>Crée le</dd>
                <dl style={{ flex: 4 }}>{jour + "/" + mois + "/" + annee}</dl>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <dd style={{ fontWeight: "bold", flex: 1 }}>Description</dd>
                <dl style={{ flex: 4 }}>{task.description}</dl>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <dd style={{ fontWeight: "bold", flex: 1 }}>Deadline</dd>
                <dl style={{ flex: 4 }}>
                  {formatDate(toJMA(task.deadline?.toDate()))}
                </dl>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <dd style={{ fontWeight: "bold", flex: 1 }}>Crée par</dd>
                <dl style={{ flex: 4 }}>{task.createdBy}</dl>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <dd style={{ fontWeight: "bold", flex: 1 }}>Etat</dd>
                <dl style={{ flex: 4 }}>{getStateString(task.state)}</dl>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default TasksList;
