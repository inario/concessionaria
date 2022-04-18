const Veiculo = require('../model/Veiculo')

const { Op }= require('sequelize')

module.exports = {
    async list(req,res){
        const veiculos = await Veiculo.findAll()
        return res.render('admin/veiculo/list.ejs', {'Veiculos':veiculos, 'msg': req.flash('msg')})

    },
    async filtro(req,res){
        let query = '%'+req.body.filtro+'%'
        const veiculos = await Veiculo.findAll({
            where:{
                modelo:{
                    [Op.like]: query
                }
            }
        })
        return res.render('admin/veiculo/list.ejs', {'Veiculos':veiculos, 'msg': req.flash('msg')})

    },
    async abreadd(req,res){
        res.render('admin/veiculo/add.ejs', { msg : req.flash('msg')})

    },
    async add(req,res){
        const { marca, modelo, ano, preco } = req.body;
        await Veiculo.create({ marca, modelo, ano, preco }).then((veiculo) => {
            req.flash('msg', 'Veículo adicionado com sucesso!' )
            res.redirect('/admin/veiculo/add');
        }, (err) => {
            req.flash('msg', "Problema ao adicionar veículo")
            res.redirect('/admin/veiculo/add');
        }); 

    },
    async abreedit(req,res){
        const id = req.params.id
        const veiculo = await Veiculo.findByPk(id);
        console.log(veiculo)
        return res.render('admin/veiculo/edit.ejs', { 'Veiculo':veiculo, 'msg' : req.flash('msg')})

    },
    async edit(req,res){
        const id = req.params.id;
        const veiculo = await Veiculo.findByPk(id);
        veiculo.marca = req.body.marca;
        veiculo.modelo = req.body.modelo;
        veiculo.ano = req.body.ano;
        veiculo.preco = req.body.preco;
        veiculo.save().then(
            (produto) => {
                req.flash('msg', ' Veículo alterado com sucesso!');
                res.render('admin/veiculo/edit.ejs',{'Veiculo':veiculo, 'msg': req.flash('msg')})
            },
            (err) => {
                req.flash('msg','Problema ao alterar veículo');
                res.render('admin/produto/edit.ejs',{'Veiculo':veiculo, 'msg': req.flash('msg')})
            }
        );
        
        
    },
    async del(req,res){
        const id = req.params.id;
        await Veiculo.destroy({
            where: {
                id: id
            
        }}).then(
            (veiculo) => {
                req.flash('msg', 'Veículo foi deletado com sucesso!');
                res.redirect('/admin/veiculo/')

        },
        (err) => {
            req.flash('msg','Problema ao deletar o produto');
            res.redirect('/admin/veiculo/')
        }

        )

    }
}