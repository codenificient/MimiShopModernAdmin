(this['webpackJsonpcoreui-free-react-admin-template'] =
	this['webpackJsonpcoreui-free-react-admin-template'] || []).push([
	[ 30 ],
	{
		710: function(e, t, i) {
			'use strict';
			i.d(t, 'a', function() {
				return o;
			});
			i(16);
			var s = i(1),
				a = i.n(s),
				u = a.a.createContext({});
			u.Consumer, u.Provider;
			function o(e, t) {
				var i = Object(s.useContext)(u);
				return e || i[t] || t;
			}
		},
		754: function(e, t, i) {
			'use strict';
			var s = i(16),
				a = i(34),
				u = i(712),
				o = i.n(u),
				n = i(1),
				r = i.n(n),
				l = i(710);
			var c = function() {
				for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
				return t
					.filter(function(e) {
						return null != e;
					})
					.reduce(function(e, t) {
						if ('function' !== typeof t)
							throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
						return null === e
							? t
							: function() {
									for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++)
										s[a] = arguments[a];
									e.apply(this, s), t.apply(this, s);
								};
					}, null);
			};
			function m(e) {
				return !e || '#' === e.trim();
			}
			var p = r.a.forwardRef(function(e, t) {
				var i = e.as,
					u = void 0 === i ? 'a' : i,
					o = e.disabled,
					n = e.onKeyDown,
					l = Object(a.a)(e, [ 'as', 'disabled', 'onKeyDown' ]),
					p = function(e) {
						var t = l.href,
							i = l.onClick;
						(o || m(t)) && e.preventDefault(), o ? e.stopPropagation() : i && i(e);
					};
				return (
					m(l.href) && ((l.role = l.role || 'button'), (l.href = l.href || '#')),
					o && ((l.tabIndex = -1), (l['aria-disabled'] = !0)),
					r.a.createElement(
						u,
						Object(s.a)({ ref: t }, l, {
							onClick: p,
							onKeyDown: c(function(e) {
								' ' === e.key && (e.preventDefault(), p(e));
							}, n)
						})
					)
				);
			});
			p.displayName = 'SafeAnchor';
			var d = p,
				b = r.a.forwardRef(function(e, t) {
					var i = e.bsPrefix,
						u = e.variant,
						n = e.size,
						c = e.active,
						m = e.className,
						p = e.block,
						b = e.type,
						h = e.as,
						v = Object(a.a)(e, [
							'bsPrefix',
							'variant',
							'size',
							'active',
							'className',
							'block',
							'type',
							'as'
						]),
						g = Object(l.a)(i, 'btn'),
						j = o()(m, g, c && 'active', u && g + '-' + u, p && g + '-block', n && g + '-' + n);
					if (v.href)
						return r.a.createElement(
							d,
							Object(s.a)({}, v, { as: h, ref: t, className: o()(j, v.disabled && 'disabled') })
						);
					t && (v.ref = t), b ? (v.type = b) : h || (v.type = 'button');
					var P = h || 'button';
					return r.a.createElement(P, Object(s.a)({}, v, { className: j }));
				});
			(b.displayName = 'Button'), (b.defaultProps = { variant: 'primary', active: !1, disabled: !1 });
			t.a = b;
		},
		820: function(e, t, i) {
			'use strict';
			var s = i(719),
				a = i(714),
				u = i(1),
				o = i.n(u),
				n = i(19);
			t.a = function(e) {
				var t = [
						{ icon: 'cil-inbox', action: 'Reception', color: 'info', count: 900 },
						{ icon: 'cil-star', action: '\xc9toiles', color: 'warning', count: 7 },
						{ icon: 'cil-alarm', action: 'Diff\xe9r\xe9', color: 'dark' },
						{ icon: 'cil-notes', action: 'Brouillons', color: 'success', count: 24 },
						{ icon: 'cil-trash', action: 'Supprim\xe9', color: 'danger' },
						{ icon: 'cil-tag', action: 'Important', color: 'violet' },
						{ icon: 'cil-warning', action: 'Junk', color: 'warning' }
					],
					i = [
						{ label: 'A Regler', color: 'primary' },
						{ label: 'Rembourser', color: 'danger' },
						{ label: 'Commandes', color: 'warning' },
						{ label: 'R\xe9gl\xe9', color: 'success' },
						{ label: 'Partenaire', color: 'info' }
					];
				return Object(n.jsx)(o.a.Fragment, {
					children: Object(n.jsx)('div', {
						className: 'card240',
						children: Object(n.jsx)('div', {
							className: 'cards-body normalBg',
							children: Object(n.jsxs)('div', {
								className: 'emailActions pl-2 pt-3 pb-3',
								children: [
									t &&
										t.map(function(e, t) {
											return Object(
												n.jsx
											)('div', { className: 'mt-2', children: Object(n.jsxs)('div', { className: 'c-message-actions mb-2 p-2 secondary', children: [ Object(n.jsx)('span', { className: 'mr-3 '.concat(e.color), children: Object(n.jsx)(s.a, { size: 'l', name: e.icon }) }), Object(n.jsx)('span', { className: '', children: e.action }), Object(n.jsx)('span', { className: 'right pl-3', children: Object(n.jsx)(a.a, { shape: 'pill', color: e.color, children: e.count }) }) ] }) }, t);
										}),
									Object(n.jsx)('h6', { className: 'textLight bold mt-5 mb-3', children: 'Labels' }),
									i &&
										i.map(function(e, t) {
											return Object(
												n.jsx
											)('div', { className: 'c-message-actions mb-2 p-2 secondary', children: Object(n.jsxs)('div', { children: [ Object(n.jsxs)('span', { className: 'mr-3 '.concat(e.color), children: [ Object(n.jsx)(s.a, { size: 'l', name: 'cib-discover' }), ' ' ] }), Object(n.jsx)('span', { children: e.label }) ] }) }, t);
										})
								]
							})
						})
					})
				});
			};
		},
		821: function(e, t, i) {
			'use strict';
			var s = i(3),
				a = i(719),
				u = (i(1), i(19));
			t.a = function(e) {
				return Object(u.jsx)(
					'div',
					Object(s.a)(
						Object(s.a)({ className: 'c-message darkenBg m-2' }, e),
						{},
						{
							children:
								e.iconList &&
								e.iconList.map(function(e, t) {
									return Object(
										u.jsx
									)('span', { className: 'p-3', children: Object(u.jsx)(a.a, { size: 'l', name: e }) }, t);
								})
						}
					)
				);
			};
		},
		822: function(e, t, i) {
			'use strict';
			i.d(t, 'a', function() {
				return s;
			});
			var s = [
				{
					id: '3564449393441473',
					date: '2016-09-25 08:02:31',
					name: 'Amil Ciccotto',
					subject: 'Nam congue, risus semper porta',
					avatar: 'https://placeimg.com/60/60/people',
					body:
						'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
					email: 'aciccotto0@godaddy.com',
					attachments: [
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'ZIP',
							size: '2.5 MP',
							color: 'primaryBg',
							title: 'Donec_metus.zip'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'MP4',
							size: '2.5 MP',
							color: 'successBg',
							title: 'osuere_metus.mp4'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'JPG',
							size: '2.5 MP',
							color: 'dangerBg',
							title: 'admin_profile.jpb'
						}
					]
				},
				{
					id: '3550895311309901',
					date: '2021-04-12 09:37:04',
					name: 'Jamill Bravington',
					subject: 'Etiam justo.',
					avatar: 'https://placeimg.com/60/60/people',
					body:
						'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
					email: 'jbravington1@skyrock.com',
					attachments: [
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'ZIP',
							size: '2.5 MP',
							color: 'primaryBg',
							title: 'Donec_metus.zip'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'MP4',
							size: '2.5 MP',
							color: 'successBg',
							title: 'osuere_metus.mp4'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'JPG',
							size: '2.5 MP',
							color: 'dangerBg',
							title: 'admin_profile.jpb'
						}
					]
				},
				{
					id: '4026667240795524',
					date: '2000-07-22 10:29:01',
					name: 'Price Sylvester',
					subject: 'In quis justo.',
					avatar: 'https://placeimg.com/60/60/people',
					body:
						'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.\n\t\t\t\n\t\t\tFusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.\n\t\t\t\n\t\t\tNulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget,\n\n\t\t\teleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
					email: 'psylvester2@tinyurl.com',
					attachments: [
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'ZIP',
							size: '2.5 MP',
							color: 'primaryBg',
							title: 'Donec_metus.zip'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'MP4',
							size: '2.5 MP',
							color: 'successBg',
							title: 'osuere_metus.mp4'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'JPG',
							size: '2.5 MP',
							color: 'dangerBg',
							title: 'admin_profile.jpb'
						}
					]
				},
				{
					id: '3529929147584664',
					date: '2020-08-16 10:39:39',
					name: 'Daune Bartholat',
					subject: 'Praesent blandit.',
					avatar: 'https://placeimg.com/60/60/people',
					body:
						'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
					email: 'dbartholat3@skype.com',
					attachments: [
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'ZIP',
							size: '2.5 MP',
							color: 'primaryBg',
							title: 'Donec_metus.zip'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'MP4',
							size: '2.5 MP',
							color: 'successBg',
							title: 'osuere_metus.mp4'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'JPG',
							size: '2.5 MP',
							color: 'dangerBg',
							title: 'admin_profile.jpb'
						}
					]
				},
				{
					id: '374622829689925',
					date: '2000-06-22 01:56:38',
					name: 'Matelda Jays',
					subject: 'Aenean lectus.',
					avatar: 'https://placeimg.com/60/60/people',
					body:
						'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
					email: 'mjays4@themeforest.net',
					attachments: [
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'ZIP',
							size: '2.5 MP',
							color: 'primaryBg',
							title: 'Donec_metus.zip'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'MP4',
							size: '2.5 MP',
							color: 'successBg',
							title: 'osuere_metus.mp4'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'JPG',
							size: '2.5 MP',
							color: 'dangerBg',
							title: 'admin_profile.jpb'
						}
					]
				},
				{
					id: '3556690711585471',
					date: '2003-02-18 12:17:08',
					name: 'Shaylah Rosser',
					subject: 'Nulla suscipit ligula in lacus.',
					avatar: 'https://placeimg.com/60/60/people',
					body:
						'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
					email: 'srosser5@telegraph.co.uk',
					attachments: [
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'ZIP',
							size: '2.5 MP',
							color: 'primaryBg',
							title: 'Donec_metus.zip'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'MP4',
							size: '2.5 MP',
							color: 'successBg',
							title: 'osuere_metus.mp4'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'JPG',
							size: '2.5 MP',
							color: 'dangerBg',
							title: 'admin_profile.jpb'
						}
					]
				},
				{
					id: '3563838490909369',
					date: '2012-04-19 08:46:08',
					name: 'Teodor McGann',
					subject: 'Vivamus vestibulum sagittis sapien.',
					avatar: 'https://placeimg.com/60/60/people',
					body:
						'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
					email: 'tmcgann6@eepurl.com',
					attachments: [
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'ZIP',
							size: '2.5 MP',
							color: 'primaryBg',
							title: 'Donec_metus.zip'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'MP4',
							size: '2.5 MP',
							color: 'successBg',
							title: 'osuere_metus.mp4'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'JPG',
							size: '2.5 MP',
							color: 'dangerBg',
							title: 'admin_profile.jpb'
						}
					]
				},
				{
					id: '3541243668959022',
					date: '2008-10-28 00:04:55',
					name: 'Beckie McJerrow',
					subject: 'Curabitur at ipsum ac tellus semper interdum.',
					avatar: 'https://placeimg.com/60/60/people',
					body:
						'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
					email: 'bmcjerrow7@pcworld.com',
					attachments: [
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'ZIP',
							size: '2.5 MP',
							color: 'primaryBg',
							title: 'Donec_metus.zip'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'MP4',
							size: '2.5 MP',
							color: 'successBg',
							title: 'osuere_metus.mp4'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'JPG',
							size: '2.5 MP',
							color: 'dangerBg',
							title: 'admin_profile.jpb'
						}
					]
				},
				{
					id: '5048371019819968',
					date: '2000-09-29 16:47:58',
					name: 'Johann MacCrackan',
					subject: 'Integer a nibh.',
					avatar: 'https://placeimg.com/60/60/people',
					body:
						'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
					email: 'jmaccrackan8@usatoday.com',
					attachments: [
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'ZIP',
							size: '2.5 MP',
							color: 'primaryBg',
							title: 'Donec_metus.zip'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'MP4',
							size: '2.5 MP',
							color: 'successBg',
							title: 'osuere_metus.mp4'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'JPG',
							size: '2.5 MP',
							color: 'dangerBg',
							title: 'admin_profile.jpb'
						}
					]
				},
				{
					id: '5108751402932592',
					date: '2000-07-27 09:08:20',
					name: 'Bryon Walthall',
					subject: 'Quisque id justo amet dignissim vestibulum.',
					avatar: 'https://placeimg.com/60/60/people',
					body:
						'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
					email: 'bwalthall9@skyrock.com',
					attachments: [
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'ZIP',
							size: '2.5 MP',
							color: 'primaryBg',
							title: 'Donec_metus.zip'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'MP4',
							size: '2.5 MP',
							color: 'successBg',
							title: 'osuere_metus.mp4'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'JPG',
							size: '2.5 MP',
							color: 'dangerBg',
							title: 'admin_profile.jpb'
						}
					]
				},
				{
					id: '377783689530661',
					date: '2017-05-22 15:29:14',
					name: 'Vale Culverhouse',
					subject: 'Aenean lectus.',
					avatar: 'https://placeimg.com/60/60/people',
					body:
						'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
					email: 'vculverhousea@sohu.com',
					attachments: [
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'ZIP',
							size: '2.5 MP',
							color: 'primaryBg',
							title: 'Donec_metus.zip'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'MP4',
							size: '2.5 MP',
							color: 'successBg',
							title: 'osuere_metus.mp4'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'JPG',
							size: '2.5 MP',
							color: 'dangerBg',
							title: 'admin_profile.jpb'
						}
					]
				},
				{
					id: '3589013177547193',
					date: '2002-08-24 12:59:35',
					name: 'Cathy Perrie',
					subject: 'Maecenas leo odio,  luctus molestie sed, justo.',
					avatar: 'https://placeimg.com/60/60/people',
					body:
						'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
					email: 'cperrieb@i2i.jp',
					attachments: [
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'ZIP',
							size: '2.5 MP',
							color: 'primaryBg',
							title: 'Donec_metus.zip'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'MP4',
							size: '2.5 MP',
							color: 'successBg',
							title: 'osuere_metus.mp4'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'JPG',
							size: '2.5 MP',
							color: 'dangerBg',
							title: 'admin_profile.jpb'
						}
					]
				},
				{
					id: '3548879957136690',
					date: '2012-01-20 20:15:48',
					name: 'Alikee MacPike',
					subject: 'Quisque eros,  congue semper rutrum, nulla.',
					avatar: 'https://placeimg.com/60/60/people',
					body:
						'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
					email: 'amacpikec@constantcontact.com',
					attachments: [
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'ZIP',
							size: '2.5 MP',
							color: 'primaryBg',
							title: 'Donec_metus.zip'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'MP4',
							size: '2.5 MP',
							color: 'successBg',
							title: 'osuere_metus.mp4'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'JPG',
							size: '2.5 MP',
							color: 'dangerBg',
							title: 'admin_profile.jpb'
						}
					]
				},
				{
					id: '6762215803308893723',
					date: '2015-02-18 17:53:13',
					name: 'Farrand Udie',
					subject: 'Integer ac leo.',
					avatar: 'https://placeimg.com/60/60/people',
					body:
						'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
					email: 'fudied@ehow.com',
					attachments: [
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'ZIP',
							size: '2.5 MP',
							color: 'primaryBg',
							title: 'Donec_metus.zip'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'MP4',
							size: '2.5 MP',
							color: 'successBg',
							title: 'osuere_metus.mp4'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'JPG',
							size: '2.5 MP',
							color: 'dangerBg',
							title: 'admin_profile.jpb'
						}
					]
				},
				{
					id: '3543221992044941',
					date: '2018-01-26 05:00:10',
					name: 'Dallis Frangleton',
					subject: 'Proin risus.',
					avatar: 'https://placeimg.com/60/60/people',
					body:
						'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
					email: 'dfrangletone@go.com',
					attachments: [
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'ZIP',
							size: '2.5 MP',
							color: 'primaryBg',
							title: 'Donec_metus.zip'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'MP4',
							size: '2.5 MP',
							color: 'successBg',
							title: 'osuere_metus.mp4'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'JPG',
							size: '2.5 MP',
							color: 'dangerBg',
							title: 'admin_profile.jpb'
						}
					]
				},
				{
					id: '3552158550984183',
					date: '2001-10-11 20:42:19',
					name: 'Rodger Bartalini',
					subject: 'Quisque erat eros, viverra eget, congue eget',
					avatar: 'https://placeimg.com/60/60/people',
					body:
						'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
					email: 'rbartalinif@sourceforge.net',
					attachments: [
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'ZIP',
							size: '2.5 MP',
							color: 'primaryBg',
							title: 'Donec_metus.zip'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'MP4',
							size: '2.5 MP',
							color: 'successBg',
							title: 'osuere_metus.mp4'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'JPG',
							size: '2.5 MP',
							color: 'dangerBg',
							title: 'admin_profile.jpb'
						}
					]
				},
				{
					id: '3568009701696303',
					date: '2009-12-03 07:02:43',
					name: 'Elberta Blasius',
					subject: 'Ut at dolor quis odio consequat varius.',
					avatar: 'https://placeimg.com/60/60/people',
					body:
						'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
					email: 'eblasiusg@blogtalkradio.com',
					attachments: [
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'ZIP',
							size: '2.5 MP',
							color: 'primaryBg',
							title: 'Donec_metus.zip'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'MP4',
							size: '2.5 MP',
							color: 'successBg',
							title: 'osuere_metus.mp4'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'JPG',
							size: '2.5 MP',
							color: 'dangerBg',
							title: 'admin_profile.jpb'
						}
					]
				},
				{
					id: '3585473851668877',
					date: '2010-12-18 04:26:52',
					name: 'Jobyna Surtees',
					subject: 'Ut tellus.',
					avatar: 'https://placeimg.com/60/60/people',
					body:
						'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
					email: 'jsurteesh@hugedomains.com',
					attachments: [
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'ZIP',
							size: '2.5 MP',
							color: 'primaryBg',
							title: 'Donec_metus.zip'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'MP4',
							size: '2.5 MP',
							color: 'successBg',
							title: 'osuere_metus.mp4'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'JPG',
							size: '2.5 MP',
							color: 'dangerBg',
							title: 'admin_profile.jpb'
						}
					]
				},
				{
					id: '5100147329409582',
					date: '2004-11-15 09:33:16',
					name: 'Jelene Baldacchi',
					subject: 'Praesent blandit.',
					avatar: 'https://placeimg.com/60/60/people',
					body:
						'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
					email: 'jbaldacchii@amazonaws.com',
					attachments: [
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'ZIP',
							size: '2.5 MP',
							color: 'primaryBg',
							title: 'Donec_metus.zip'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'MP4',
							size: '2.5 MP',
							color: 'successBg',
							title: 'osuere_metus.mp4'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'JPG',
							size: '2.5 MP',
							color: 'dangerBg',
							title: 'admin_profile.jpb'
						}
					]
				},
				{
					id: '633110923035376142',
					date: '2016-01-26 03:06:10',
					name: 'Faulkner Garshore',
					subject: 'Nulla neque convallis eget, eleifend luctus',
					avatar: 'https://placeimg.com/60/60/people',
					body:
						'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
					email: 'fgarshorej@blinklist.com',
					attachments: [
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'ZIP',
							size: '2.5 MP',
							color: 'primaryBg',
							title: 'Donec_metus.zip'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'MP4',
							size: '2.5 MP',
							color: 'successBg',
							title: 'osuere_metus.mp4'
						},
						{
							avatar: 'https://picsum.photos/50/50',
							ext: 'JPG',
							size: '2.5 MP',
							color: 'dangerBg',
							title: 'admin_profile.jpb'
						}
					]
				}
			];
		},
		893: function(e, t, i) {},
		961: function(e, t, i) {
			'use strict';
			i.r(t);
			var s = i(719),
				a = (i(714), i(1)),
				u = i.n(a),
				o = i(16),
				n = i(34),
				r = i(712),
				l = i.n(r),
				c = i(710),
				m = u.a.forwardRef(function(e, t) {
					var i = e.bsPrefix,
						s = e.size,
						a = e.toggle,
						r = e.vertical,
						m = e.className,
						p = e.as,
						d = void 0 === p ? 'div' : p,
						b = Object(n.a)(e, [ 'bsPrefix', 'size', 'toggle', 'vertical', 'className', 'as' ]),
						h = Object(c.a)(i, 'btn-group'),
						v = h;
					return (
						r && (v = h + '-vertical'),
						u.a.createElement(
							d,
							Object(o.a)({}, b, { ref: t, className: l()(m, v, s && h + '-' + s, a && h + '-toggle') })
						)
					);
				});
			(m.displayName = 'ButtonGroup'), (m.defaultProps = { vertical: !1, toggle: !1, role: 'group' });
			var p = m,
				d = i(754),
				b = i(19);
			var h = function(e) {
					return Object(b.jsxs)('div', {
						className: 'subjectContainer w90 borderTop',
						children: [
							Object(b.jsx)('h4', {
								className: 'email-text email-subject mb-4',
								children: 'Attachments'
							}),
							Object(b.jsx)('div', {
								className: 'flexRow attachall',
								children:
									e.attachments &&
									e.attachments.map(function(e, t) {
										return Object(
											b.jsxs
										)('div', { className: 'sa outline attach p-2 mr-2', children: [ Object(b.jsx)('div', { className: 'mr-2 left', children: Object(b.jsx)('div', { className: 'c-avatar-text '.concat(e.color), children: e.ext }) }), Object(b.jsx)('div', { className: 'middleText', children: Object(b.jsxs)('div', { className: 'mr-2', children: [ Object(b.jsx)('span', { className: 'ml-5 pt-4 textLight', children: e.title }), Object(b.jsx)('div', { className: 'ml-5 light', children: e.size }) ] }) }), Object(b.jsx)('span', { className: 'email-text attachicon right', children: Object(b.jsx)(s.a, { size: 'l', name: 'cil-cloud-download' }) }) ] }, t);
									})
							})
						]
					});
				},
				v = i(820),
				g = i(821);
			var j = function(e) {
					return Object(b.jsx)('div', {
						className: 'subjectContainer w90 borderBtm',
						children: Object(b.jsx)('h5', { className: 'email-text email-subject', children: e.subject })
					});
				},
				P = i(171),
				f = i(822);
			i(893);
			t.default = function(e) {
				var t = f.a.find(function(t) {
					return t.id.toString() === e.match.params.id;
				});
				return Object(b.jsx)(u.a.Fragment, {
					children: Object(b.jsxs)('div', {
						className: 'row p-2 darkerBg',
						children: [
							Object(b.jsx)(v.a, {}),
							Object(b.jsx)('div', {
								className: 'col-sm-9 ',
								children: Object(b.jsxs)('div', {
									className: 'cards-body normalBg',
									children: [
										Object(b.jsx)('div', {
											className: 'pt-3 pl-3 textLight',
											children: Object(b.jsx)(g.a, {
												iconList: [
													'cil-envelope-closed',
													'cil-star',
													'cil-bookmark',
													'cil-share',
													'cil-share-all',
													'cil-trash',
													'cil-tags',
													'cil-settings'
												],
												style: { width: '55%', padding: '13px' }
											})
										}),
										Object(b.jsx)('div', {
											className: 'email-title mt-2 mb-5',
											children: Object(b.jsx)(j, { subject: t.subject })
										}),
										Object(b.jsxs)('div', {
											className: 'emailContainer mb-4',
											children: [
												Object(b.jsxs)('div', {
													className: 'flexRow m-4 bold email-user',
													children: [
														Object(b.jsx)('div', {
															className: 'd-block',
															children: Object(b.jsxs)('div', {
																className: 'recipient',
																children: [
																	Object(b.jsx)('div', {
																		className: 'image-container',
																		children: Object(b.jsx)('img', {
																			src: t.avatar,
																			alt: t.avatar
																		})
																	}),
																	Object(b.jsx)('span', {
																		className: 'user-name',
																		children: t.name
																	}),
																	Object(b.jsx)('br', {}),
																	Object(b.jsxs)('span', {
																		className: 'user-email',
																		children: [ 'From: ', t.email ]
																	})
																]
															})
														}),
														Object(b.jsx)('span', {
															className: 'floatRight pr-4',
															children: Object(P.c)(t.date)
														})
													]
												}),
												Object(b.jsx)('div', { className: 'email-text p-5', children: t.body })
											]
										}),
										Object(b.jsx)('div', {
											children: t.attachments && Object(b.jsx)(h, { attachments: t.attachments })
										}),
										Object(b.jsx)('div', {
											className: 'mt-4 mb-4 ml-5',
											children: Object(b.jsxs)(p, {
												children: [
													Object(b.jsxs)(d.a, {
														className: 'mr-5',
														variant: 'info',
														children: [
															Object(b.jsx)(s.a, { name: 'cil-share-all' }),
															'\xa0\xa0Repondre'
														]
													}),
													Object(b.jsxs)(d.a, {
														className: 'violetBg',
														children: [
															Object(b.jsx)(s.a, { name: 'cil-transfer' }),
															'\xa0\xa0Forward'
														]
													})
												]
											})
										})
									]
								})
							})
						]
					})
				});
			};
		}
	}
]);
//# sourceMappingURL=30.cff34b9b.chunk.js.map
