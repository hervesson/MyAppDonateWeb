import { useState, useEffect } from "react";
import hello from "../../Assets/hello.png";
import NumberDoacoes from "../charts/NumberDoacoes";
import ValorArrecadado from "../charts/ValorArrecadado";
import NumberCestas from "../charts/NumberCestas";
import NumberDoadores from "../charts/NumberDoadores";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./Main.css"

function Main(){
	const [nameComponent, setnameComponent] = useState("")
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [dropdownOpen1, setDropdownOpen1] = useState(false);

	const [ano, setAno] = useState("Mês corrente");
	const [mes, setMes] = useState("Ano corrente");

  	const toggle = () => setDropdownOpen(prevState => !prevState);


  	const toggle1 = () => setDropdownOpen1(prevState => !prevState);

	let [activeComponent, setActiveComponent] = useState(
	 	<div className="charts__left">
			<div className="charts__left__title">
				<div>
					<h1>Número de doações</h1>
				</div>
				<i className="fa fa-usd"></i>
			</div>
			<NumberDoacoes />
		</div>
	); 

	useEffect(() => {
    	switch (nameComponent) {
      	case "doações":
        		setActiveComponent(
        			<div className="charts__left">
						<div className="charts__left__title">
							<div>
								<h1>Número de doações</h1>
							</div>
							<i className="ri-hand-heart-line ri-2x text-lightblue"></i>
						</div>
						<NumberDoacoes />
					</div>
        		);
        	break;

      	case "arrecadado":
        	setActiveComponent(
        		<div className="charts__left">
					<div className="charts__left__title">
						<div>
							<h1>Valor arrecadado</h1>
						</div>
						<i className="ri-money-dollar-box-fill ri-2x text-red"></i>
					</div>
					<ValorArrecadado />
				</div>
        	);
        break;

        case "cestas":
        	setActiveComponent(
        		<div className="charts__left">
					<div className="charts__left__title">
						<div>
							<h1>Número de cestas básicas</h1>
						</div>
						<i className="ri-shopping-cart-fill ri-2x text-yellow"></i>
					</div>
						<NumberDoacoes />
				</div>
        	);
        break;

        case "doadores":
        	setActiveComponent(
        		<div className="charts__left">
					<div className="charts__left__title">
						<div>
							<h1>Número de doadores</h1>
						</div>
						<i className="ri-team-line ri-2x text-green"></i>
					</div>
					<NumberCestas />
				</div>
        	);
        break;

      	default:
        	setActiveComponent(
        		<div className="charts__left">
					<div className="charts__left__title">
						<div>
							<h1>Número de doações</h1>
						</div>
						<i className="fa fa-usd"></i>
					</div>
						<NumberDoacoes />
				</div>
        	);
        break;
    	}
  	}, [nameComponent]);
	
	const toggleTab = tab => {
     	setnameComponent(tab)
   }

	return(
		<div className="main">
			<div class="d-flex justify-content-center bg-danger">
				<h5>Clique em conta no menu lateral e termine seu cadastro</h5>
			</div>
			<div className="main__container">
				<div className="main__title">
					<img src={hello} alt="hello"></img>
					<div className="main__greeting">
						<h1>Olá Hervesson</h1>
						<p>Bem vindo ao seu painel</p>
					</div>	
				</div>

				<div className="d-flex flex-row">
					<div className="pr-3 pt-3">
						<Dropdown isOpen={dropdownOpen} toggle={toggle}>
					      <DropdownToggle caret>
					        {ano}
					      </DropdownToggle>
					      <DropdownMenu>
					        <DropdownItem onClick={() => setAno("2021")}>2021</DropdownItem>
					      </DropdownMenu>
					   </Dropdown>
					</div>

					<div className="pl-3 pt-3">   
					   <Dropdown isOpen={dropdownOpen1} toggle={toggle1}>
					      <DropdownToggle caret>
					        {mes}
					      </DropdownToggle>
					      <DropdownMenu>
					        <DropdownItem onClick={() => setMes("Janeiro")}>Janeiro</DropdownItem>
					        <DropdownItem onClick={() => setMes("Fevereiro")}>Fevereiro</DropdownItem>
					        <DropdownItem onClick={() => setMes("Março")}>Março</DropdownItem>
					        <DropdownItem onClick={() => setMes("Abril")}>Abril</DropdownItem>
					        <DropdownItem onClick={() => setMes("Maio")}>Maio</DropdownItem>
					        <DropdownItem onClick={() => setMes("Junho")}>Junho</DropdownItem>
					        <DropdownItem onClick={() => setMes("Julho")}>Julho</DropdownItem>
					        <DropdownItem onClick={() => setMes("Agosto")}>Agosto</DropdownItem>
					        <DropdownItem onClick={() => setMes("Setembro")}>Setembro</DropdownItem>
					        <DropdownItem onClick={() => setMes("Outubro")}>Outubro</DropdownItem>
					        <DropdownItem onClick={() => setMes("Novembro")}>Novembro</DropdownItem>
					        <DropdownItem onClick={() => setMes("Dezembro")}>Dezembro</DropdownItem>
					      </DropdownMenu>
					   </Dropdown>
					</div>   
				</div>

				<div className="main__cards">
					<div className="card" onClick={() => toggleTab("doações")}>
						<i class="ri-hand-heart-line ri-2x text-lightblue"></i> 
						<div className="card__inner">
							<p className="text-primary-p">Número de doações</p>
							<span className="font-bold text-title">578</span>
						</div>
					</div>

					<div className="card" onClick={() => toggleTab("arrecadado")}>
						<i className="ri-money-dollar-box-fill ri-2x text-red"></i>
						<div className="card__inner">
							<p className="text-primary-p">Valor arrecadado</p>
							<span className="font-bold text-title">R$2.467</span>
						</div>
					</div>

					<div className="card" onClick={() => toggleTab("cestas")}>
						<i className="ri-shopping-cart-fill ri-2x text-yellow"></i>
						<div className="card__inner">
							<p className="text-primary-p">Número de cestas básicas</p>
							<span className="font-bold text-title">2.467</span>
						</div>
					</div>

					<div className="card" onClick={() => toggleTab("doadores")}>
						<i className="ri-team-line ri-2x text-green"></i>
						<div className="card__inner">
							<p className="text-primary-p">Número de doadores</p>
							<span className="font-bold text-title">40</span>
						</div>
					</div>
				</div>

				<div>

					{activeComponent}

					{/*<div className="charts__right">
						<div className="charts__right__title">
							<div>
								<h1>Daily reports</h1>
								<p>São luis - MA, BR</p>
							</div>
							<i className="fa fa-area-chart"></i>
						</div>
						
						<div className="charts__right__cards">
							<div className="card1">
								<h1>Lucro</h1>
								<p>R$2500</p>
							</div>

							<div className="card2">
								<h1>Pagamentos</h1>
								<p>R$250</p>
							</div>

							<div className="card3">
								<h1>Custos de hospedagem</h1>
								<p>R$150</p>
							</div>

							<div className="card4">
								<h1>Banco de dados</h1>
								<p>R$190</p>
							</div>
						</div>
					</div>*/}
				</div>
			</div>
		</div>
	);
}

export default Main