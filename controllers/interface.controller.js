const { Router } = require("express");
const router = Router();
const repository = require("../data/db");
const inspect = require("util").inspect;
const decomposer = require("../algorithm");

router.get('/gui', (req, res) => {
  repository.getAllRelations().then(async items => {
    for(let i = 0; i < items.length; i++){
      items[i].K = await Promise.resolve(repository.getKeysOfRelation(items[i].relation_id).then(data => { return data}));
    }
    for (let i = 0; i < items.length; i++) {
      items[i].Fmin = await Promise.resolve(repository.getFminOfRelation(items[i].relation_id).then(data => { return data }));
    }
    res.render('pages/index.ejs', { relations: items });
  })
})

router.get('/add', (req, res) => {
  res.render('pages/addRelation.ejs');
})

router.post("/solve", async (req, res) => {
  const { relation_id, relation } = req.body;
  const keys = await Promise.resolve(repository.getKeysOfRelation(relation_id).then(data => { return data }));
  const fmin = await Promise.resolve(repository.getFminOfRelation(relation_id).then(data => { return data }));
  const solution = decomposer.decomposeToThirdNF(relation_id, keys, fmin);
  const log = decomposer.getLog();
  res.render("pages/solution.ejs", { solution: solution, R: relation, log })
})

router.post("/add", async (req, res) => {
  const relId = await Promise.resolve(repository.addRelation(req.body.rel));
  repository.addKeysToRelation(Number(relId), req.body.keys);
  repository.addFminToRelation(Number(relId), req.body.fmin);
  res.redirect("/gui");
})

router.post("/delete", (req, res) => {
  repository.deleteRelation(req.body.relation_id);
  res.redirect("/gui");
})

module.exports = router;