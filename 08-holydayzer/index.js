import cors from "cors";
import express from "express";

const app = express();
app.use(cors());
app.use(express.json());

const holidays = [
  {date: "1/1/2022", name: "Confraternização mundial"},
  {date: "1/3/2022", name: "Carnaval"},
  {date: "4/17/2022", name: "Páscoa"},
  {date: "4/21/2022", name: "Tiradentes"},
  {date: "5/1/2022", name: "Dia do trabalho"},
  {date: "6/16/2022", name: "Corpus Christi"},
  {date: "9/7/2022", name: "Independência do Brasil"},
  {date: "10/12/2022", name: "Nossa Senhora Aparecida"},
  {date: "11/2/2022", name: "Finados"},
  {date: "11/15/2022", name: "Proclamação da República"},
  {date: "12/25/2022", name: "Natal"},
];

app.get("/holidays", (req, res) => {
  res.send(holidays);
});

app.get("/holidays/:month", (req, res) => {
  const {month} = req.params;
  res.send(holidays.filter(holiday => holiday.date.split("/")[0] === month));
});

app.get("/is-today-holiday", (req, res) => {
  const today = new Date();
  const holiday = holidays.find(holiday => holiday.date === today.toLocaleString("en-us"));
  res.send(holiday ? `Sim, hoje é ${holiday.name}` : "Não, hoje não é feriado");
});

app.listen(4000);
