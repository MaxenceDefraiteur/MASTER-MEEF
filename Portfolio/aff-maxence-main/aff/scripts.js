document.addEventListener("DOMContentLoaded", function() {
	// Your code here
	bake(); // Replace myFunction() with the name of your function
});

const AFFS = [
		['Le professeur, acteur de la communauté éducative et du service public de l’Éducation Nationale.',
			[
				[
					'A1',
					'Fonde son action sur les principes et enjeux du système éducatif, les valeurs de l’école républicaine, le référentiel et le cadre réglementaire et éthique du métier.',
					1,
					'Je pense être niveau 4.',
					0,
					'L.D. (Ludovic Delvalée)'
				],
				[
					'A2',
					'Respecte et fait respecter les principes d’égalité, de laïcité, d’équité, de tolérance et de refus de toute discrimination.',
					2,
					'Je pense être niveau 4.',
					1,
					'L.D. (Ludovic Delvalée)'
				],
				[
					'A3',
					'Répond aux exigences d’assiduité, ponctualité, sécurité des élèves et confidentialité.',
					3,
					'Je pense être niveau 4.',
					2,
					'L.D. (Ludovic Delvalée)'
				],
				[
					'A4',
					'Adopte une attitude et un positionnement d’adulte responsable dans la classe et dans l’établissement.',
					4,
					'Je pense être niveau 4.',
					3,
					'L.D. (Ludovic Delvalée)'
				],
				[
					'A5',
					'Accompagne les élèves dans le développement de leurs compétences sociales et citoyennes.',
					4,
					'Je pense être niveau 4.',
					2,
					'L.D. (Ludovic Delvalée)'
				],
				[
					'A6',
					'Communique de manière correcte, claire et adaptée avec son (ses) interlocuteur(s).',
					4,
					'Je pense être niveau 4.',
					2,
					'L.D. (Ludovic Delvalée)'
				],
				[
					'A7',
					'Adopte une attitude favorable à l’écoute et aux échanges avec son (ses) interlocuteur(s).',
					4,
					'Je pense être niveau 4.',
					2,
					'L.D. (Ludovic Delvalée)'
				],
				[
					'A8',
					'Participe à la réflexion et au travail collectif mis en place dans son établissement.',
					4,
					'Je pense être niveau 4.',
					2,
					'L.D. (Ludovic Delvalée)'
				],
				[
					'A9',
					'Sait rendre compte de son travail.',
					4,
					'Je pense être niveau 4.',
					2,
					'L.D. (Ludovic Delvalée)'
				],
				[
					'A10',
					'Connaît et met en œuvre les droits et obligations liés à l’usage du numérique dans ses pratiques professionnelles.',
					4,
					'Je pense être niveau 4.',
					2,
					'L.D. (Ludovic Delvalée)'
				]
			]
		],
		[
			'Le professeur, pilote de son enseignement, efficace dans la transmission des savoirs et la construction des apprentissages.',
			[
				[
					'A11',
					'Mobilise les ressources professionnelles (acquis de la recherche, références institutionnelles, orientations didactiques et pédagogiques) sur le développement de l’adolescent et la construction de ses apprentissages pour étayer son action.',
					4,
					'Je pense être niveau 4.',
					2,
					'L.D. (Ludovic Delvalée)'
				],
				[
					'A12',
					'Maîtrise les savoirs disciplinaires et didactiques nécessaires à la mise en œuvre des programmes d’enseignement du collège et du lycée élémentaire.',
					4,
					'Je pense être niveau 4.',
					2,
					'L.D. (Ludovic Delvalée)'
				],
				[
					'A13',
					'Assure la progression dans les apprentissages de tous les élèves au regard des objectifs fixés.',
					4,
					'Je pense être niveau 4.',
					2,
					'L.D. (Ludovic Delvalée)'
				],
				[
					'A14',
					'Planifie des séquences d’enseignement-apprentissage structurées, mobilisant un cadre didactique et pédagogique répondant aux objectifs visés.',
					4,
					'Je pense être niveau 4.',
					2,
					'L.D. (Ludovic Delvalée)'
				],
				[
					'A15',
					'Conduit un enseignement explicite, attentif aux besoins de chaque élève, en recourant à la coopération et à la différenciation.',
					4,
					'Je pense être niveau 4.',
					2,
					'L.D. (Ludovic Delvalée)'
				],
				[
					'A16',
					'Installe et entretient un cadre d’apprentissage dynamique et sécurisant, en traitant les tensions de manière appropriée lorsqu’elles surviennent.',
					4,
					'Je pense être niveau 4.',
					2,
					'L.D. (Ludovic Delvalée)'
				],
				[
					'A17',
					'Sait utiliser les évaluations nationales; Pratique différents types d’évaluation, dont l’observation et l’auto-évaluation, pour:\n- mesurer les acquis des élèves (résultats, processus)\n- déterminer les actions d’accompagnement, de différenciation ou de remédiation répondant aux besoins identifiés\n- analyser ses pratiques pour les différencier et les adapter.',
					4,
					'Je pense être niveau 4.',
					2,
					'L.D. (Ludovic Delvalée)'
				],
			]
		],
		[
			'Le professeur, praticien réflexif, acteur de son développement professionnel.',
			[
				[
					'A18',
					'Mobilise des savoirs de recherche pour analyser des aspects précis de son enseignement et leur impact sur les élèves.',
					4,
					'Je pense être niveau 4.',
					2,
					'L.D. (Ludovic Delvalée)'
				],
				[
					'A19',
					'Intègre une dimension évaluative à l’ensemble de son action en ayant le souci d’en mesurer l’efficacité.',
					4,
					'Je pense être niveau 4.',
					2,
					'L.D. (Ludovic Delvalée)'
				],
				[
					'A20',
					'Exerce une veille à visée de formation / information en lien avec son métier.',
					4,
					'Je pense être niveau 4.',
					2,
					'L.D. (Ludovic Delvalée)'
				],
				[
					'A21',
					'Exploite les possibilités offertes par les outils et les environnements numériques pour actualiser ses connaissances et communiquer avec ses pairs.',
					4,
					'Je pense être niveau 4.',
					2,
					'L.D. (Ludovic Delvalée)'
				],
				[
					'A22',
					'Formule ses besoins de formation pour actualiser ses savoirs, conforter ou faire évoluer ses pratiques.',
					4,
					'Je pense être niveau 4.',
					2,
					'L.D. (Ludovic Delvalée)'
				],
				[
					'A23',
					'Prend en compte les conseils ou recommandations qui lui sont donnés (auto-positionnement, entretiens).',
					4,
					'Je pense être niveau 4.',
					2,
					'L.D. (Ludovic Delvalée)'
				]
			]
		],
		[
			'Le professeur, praticien réflexif, acteur de son développement professionnel.',
			[
				[
					'N1',
					'Produire et concevoir au travers du numérique.',
					4,
					'Je pense être niveau 4.',
					2,
					'L.D. (Ludovic Delvalée)'
				],
				[
					'N2',
					'Mettre en œuvre dans la classe le numérique à destination des élèves.',
					4,
					'Je pense être niveau 4.',
					2,
					'L.D. (Ludovic Delvalée)'
				],
				[
					'N3',
					'Analyse et réflexivité autour du numérique et de ses activités.',
					4,
					'Je pense être niveau 4.',
					2,
					'L.D. (Ludovic Delvalée)'
				]
			]
		]
	];


function bake() {
	
	AFFS.forEach((atts) => {
		
		// Grab les codes des attendus contenus dedans
		let codesstr = '[';
		let codes = [];
		for (let i = 0; i < atts[1].length; i++) {
			 codesstr += '"'+atts[1][i][0]+'"' + (i < atts[1].length-1 ? ',' : '');
			 codes.push(atts[1][i][0]);
		}
		codesstr += ']';
		
		// Ajouter le bouton de développement / contraction
		let tr = document.createElement('tr');
		let td = document.createElement('td');
		td.setAttribute('colspan', '6');
		td.setAttribute('onclick', 'dvlp(this, '+codesstr+')');
		let span = document.createElement('span');
		span.classList.add('developpable');
		
		let icon = document.createElement('img');
		icon.setAttribute('src', 'less expanded.svg');
		//<img src = "happy.svg" alt="My Happy SVG"/>
		span.appendChild(icon);
		let expandtext = document.createElement('a');
		expandtext.textContent = 'Attendus ' + codes[0] + ' à ' + codes[codes.length-1];
		span.appendChild(expandtext);
		
		td.appendChild(span);
		tr.appendChild(td);
		
		tr.setAttribute('expanded', 'false');
		
		document.getElementById('lignesAffs').appendChild(tr);
		
		atts[1].forEach((att) => addLine(att[0], att[1], att[2], att[3], att[4], att[5]));
		
	});
}

// Exemple d'ensemble de paramètres :
// code = A1
// desc = Sait faire respecter [...] république et France.
// autopos = 4
// comms = Je pense [...] niveau 4.
// posform = 3
// forms = L.D.
function addLine(code, desc, autopos, comms, posform, forms) {
	
	let tr = document.createElement('tr');
	tr.classList.add('clrniveau'+autopos+'bg');
	tr.classList.add('hidden-aff-row');
	
	let td_code    = document.createElement('td');
	let td_desc    = document.createElement('td');
	let td_autopos = document.createElement('td');
	let td_comms   = document.createElement('td');
	let td_posform = document.createElement('td');
	let td_forms   = document.createElement('td');
	
	td_code.textContent = code;
	td_code.classList.add('code');
	td_desc.textContent = desc;
	td_desc.classList.add('leftaligned');
	
	let p_autopos = document.createElement('p');
	p_autopos.textContent = 'Niveau ' + autopos;
	p_autopos.classList.add('clrniveau'+autopos);
	p_autopos.classList.add('txtniveau');
	td_autopos.appendChild(p_autopos);
	
	td_comms.textContent = comms;
	td_comms.classList.add('leftaligned');
	
	let p_posform = document.createElement('p');
	p_posform.textContent = 'Niveau ' + posform;
	p_posform.classList.add('clrniveau'+posform);
	p_posform.classList.add('txtniveau');
	td_posform.appendChild(p_posform);
	
	td_forms.textContent = forms;
	
	tr.appendChild(td_code);
	tr.appendChild(td_desc);
	tr.appendChild(td_autopos);
	tr.appendChild(td_comms);
	tr.appendChild(td_posform);
	tr.appendChild(td_forms);
	
	// Set some properties for the new div (optional)
	//newDiv.textContent = "This is a dynamically created div.";
	
	// Append the new div to an existing HTML element (e.g., a div with id "container")
	document.getElementById('lignesAffs').appendChild(tr);
}


function dvlp(e, lines) {
	let rows = document.getElementById('lignesAffs').children;
	for (row of rows) {
		let sel_row = false;
		for (rowchild of row.children) {
			if (rowchild.classList.contains('code')) {
				for (selector of lines) {
					sel_row = sel_row || rowchild.textContent == selector;
				}
			}
		}
		if (sel_row) {
			row.classList.toggle('hidden-aff-row');
			row.classList.toggle('shown-aff-row');
		}
	}
	
	let icon = e.children[0].querySelector('img');
	if (e.getAttribute('expanded') == 'true') {
		icon.setAttribute('src', 'less expanded.svg');
		e.setAttribute('expanded', 'false');
	} else {
		icon.setAttribute('src', 'expand more.svg');
		e.setAttribute('expanded', 'true');
	}
	
	/*
	if (sel_row) {
		row.classList.toggle('hidden-aff-row');
		row.classList.toggle('shown-aff-row');
		if (row.classList.contains('shown-aff-row')) {
			let img_tag = row.children
			console.log(img_tag);
		} else {
			let img_tag = row.querySelector('.child');
			console.log(img_tag);
		}
	}*/
}