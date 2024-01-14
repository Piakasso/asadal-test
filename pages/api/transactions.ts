import type { NextApiRequest, NextApiResponse } from "next";

const transactions = [
  {
    id: "1",
    date: "14-11-2023",
    time: "03:42:13",
    category: "ATM",
    type: "income",
    details: "head office Baker st. ,London",
    sum: 440,
  },
  {
    id: "2",
    date: "17-11-2023",
    time: "20:15:43",
    category: "gasoline",
    type: "expense",
    details: "shell company",
    sum: 40,
  },
  {
    id: "3",
    date: "28-12-2023",
    time: "18:25:43",
    category: "travel",
    type: "expense",
    details: "booking.com",
    sum: 200,
  },
  {
    id: "4",
    date: "30-12-2023",
    time: "21:08:33",
    category: "ATM",
    type: "income",
    details: "office, Dublin",
    sum: 550,
  },
  {
    id: "5",
    date: "31-12-2023",
    time: "09:01:06",
    category: "withdraw",
    type: "expense",
    details: "Halkbank Istiklal st. ,Istanbul",
    sum: 150,
  },
  {
    id: "6",
    date: "31-12-2023",
    time: "16:11:06",
    category: "ATM",
    type: "income",
    details: "Barclays bank ,London",
    sum: 500,
  },

  {
    id: "7",
    date: "01-01-2024",
    time: "10:25:43",
    category: "restaurant",
    type: "expense",
    details: "starbucks",
    sum: 10,
  },
  {
    id: "8",
    date: "01-01-2024",
    time: "15:02:01",
    category: "restaurant",
    type: "expense",
    details: "1001 and 1 night restaurant",
    sum: 123.32,
  },
  {
    id: "9",
    date: "02-01-2024",
    time: "14:21:41",
    category: "products",
    type: "expense",
    details: "winery shop",
    sum: 11.1,
  },
  {
    id: "10",
    date: "02-01-2024",
    time: "15:22:41",
    category: "ATM",
    type: "income",
    details: "head office Baker st. ,London",
    sum: 550,
  },
  {
    id: "11",
    date: "03-01-2024",
    time: "12:30:00",
    category: "products",
    type: "expense",
    details: "local supermarket",
    sum: 25.5,
  },
  {
    id: "12",
    date: "04-01-2024",
    time: "18:45:00",
    category: "entertainment",
    type: "expense",
    details: "movie theater",
    sum: 20.0,
  },
  {
    id: "13",
    date: "05-01-2024",
    time: "08:20:00",
    category: "utilities",
    type: "expense",
    details: "electricity bill",
    sum: 80.0,
  },

  {
    id: "14",
    date: "06-01-2024",
    time: "16:10:00",
    category: "restaurant",
    type: "expense",
    details: "local pizza place",
    sum: 15.75,
  },
  {
    id: "15",
    date: "07-01-2024",
    time: "09:55:00",
    category: "shopping",
    type: "expense",
    details: "clothing store",
    sum: 50.0,
  },
  {
    id: "16",
    date: "09-01-2024",
    time: "16:30:00",
    category: "entertainment",
    type: "expense",
    details: "bowling alley",
    sum: 30.0,
  },
  {
    id: "17",
    date: "09-01-2024",
    time: "12:15:00",
    category: "shopping",
    type: "expense",
    details: "electronics store",
    sum: 120.0,
  },
  {
    id: "18",
    date: "01-01-2024",
    time: "13:42:13",
    category: "ATM",
    type: "income",
    details: "river office ,London",
    sum: 350,
  },
];
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { type, category } = req.query;
    let filteredTransaction = transactions;

    if (type || category) {
      filteredTransaction = transactions.filter((item) => {
        return (
          (!type || item.type === type) &&
          (!category || item.category === category)
        );
      });
    }

    res.status(200).send(filteredTransaction);
  } catch (err) {
    res.status(500).send({ error: "failed to fetch data" });
  }
}
