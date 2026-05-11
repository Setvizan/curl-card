const card = (visits: number): string => {
	const counter = visits.toString().padStart(8, '-');

	return `
⠄⡈⠀⠀⡀⠩⢆⠰⣊⠘⠀⢛⡠⡈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⡈⠀⠃⡂⡥⢂⠕⢘⠀⠂⡀⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ooooo      ooo  o8o                       
⠁⡃⢀⠅⠫⠘⢈⣢⢑⠄⡴⣱⡂⣅⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ \`888b.     \`8'  \`"'                       
⢀⢘⢐⡈⡻⠉⢜⢠⡁⡙⢭⡾⢌⠴⢇⠆⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  8 \`88b.    8  oooo  ooo. .oo.    .ooooo. 
⣁⠀⠈⠔⡀⠀⠂⠗⡃⠁⠇⠑⠶⢱⠄⣞⡐⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⠀⠀⣀⢘⣌⣚⣤⢂⠀⠀  8   \`88b.  8  \`888  \`888P"Y88b  d88' \`88b           
⠀⡂⣊⠨⠅⠂⢽⢁⡘⣸⠈⡣⢤⠬⣖⠐⠁⠃⠀⢀⠠⣀⠠⣄⡠⠀⣀⣪⣇⣣⡧⢥⣴⣽⡟⡾⣯⣲⠁⠀  8     \`88b.8   888   888   888  888   888      
⠂⢀⠁⠢⠀⢐⡎⢢⣨⣂⣃⢠⠙⣊⠐⠧⠅⠀⠘⠙⡮⣭⣧⣽⣼⣯⣿⣷⣾⣿⣾⣯⣯⣿⣿⣿⣟⣿⡅⠀  8       \`888   888   888   888  888   888
⠄⠀⡠⠴⠀⠨⡘⠡⡱⠝⠖⠰⡁⠔⠀⠀⢳⡄⠀⠀⠈⠏⠁⠉⠙⠯⠿⠟⠿⠿⠻⢿⣿⣿⣿⣿⣿⣿⣿⣤ o8o        \`8  o888o o888o o888o \`Y8bod8P'
⠀⠂⠠⠀⡀⢠⠪⠀⠽⠞⢜⠈⠁⢂⠄⠀⢸⣿⢶⠀⠀⢀⠤⠀⠠⠄⠀⠀⠀⠀⠀⠀⠍⠙⠛⢴⣿⣿⣿⣿
⠀⠀⠀⠀⠥⠰⠴⠀⠒⢄⠘⠤⢁⡀⣨⣇⢺⣿⠘⠖⠠⢼⣀⣠⡀⠀⠀⠀⡀⠰⣤⣤⣠⣴⣴⣴⡸⣿⣿⣿ Hi! I'm Nino, a software engineer and photographer.
⠀⡁⠀⠀⠀⢀⠀⠂⠀⠀⢈⡀⠁⠐⡹⣿⡇⢿⣧⠀⠀⣼⡟⣾⣧⠀⠀⠀⠘⠆⢀⣐⡉⠠⠥⢉⡀⠒⠠⠄ I enjoy creating, fixing and solving things.
⠀⠀⣀⠀⠀⠀⠀⠀⠀⢐⠐⢁⠈⠈⠠⠂⠀⠈⠻⠀⣴⣿⣿⣿⣿⡄⠀⠀⠀⢸⠈⠉⠉⠁⠀⠀⠀⠔⣀⡠ I hope my projects bring a little joy to this world.
⠀⠀⠀⠀⠀⠀⠈⠀⠀⠘⠁⠀⠀⠁⠊⠲⠀⣄⣴⣿⣿⣿⣞⢿⡿⠅⢀⠀⣀⣼⣠⣤⣶⣿⣾⣿⣿⣿⣿⣿ :)
⠀⠀⠀⠁⠂⠀⠂⠀⡀⠀⠀⠁⠀⠀⠐⠀⢱⣿⣿⣿⣿⣿⣿⣆⠓⠀⠈⠛⢿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿ 
⠀⠀⠀⠀⠀⠀⠠⠀⠄⠀⠀⠀⠄⠀⠘⠀⠈⡙⢛⣻⣿⣿⣿⣿⣶⣶⣶⣶⣶⣶⣶⣶⣶⣿⣽⣟⣿⠿⠿⠿ Website: https://nin.ooo             
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⠀⠠⠀⢀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ Github: https://github.com/Setvizan  
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ Instagram: @Setvizan                
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ Neuf Zuerich: https://neufzuerich.ch 
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⣀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ Thanks for being the  \\ '  * /                        
⠀⠀⢀⣀⣤⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣮⣿⢽⢽⢻⣛⣿⢿⣿⣿⣿⣿                  * ~ ${counter} th ~                  
⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⡟⠛⠉⠛⠻⠶⣿⣷⣿⣿⣿⣿⣻⡛⣛⣻⣿                     , '  |"  \\ Visitor to my cli-card!
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠊⠁⠉⠀⠀⠀⠀⠀⠁⠉⠈⠿⠟⢿⣿⣿⣿⣿⣿⣿ \n
`
};

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const ua = request.headers.get("user-agent") ?? "";

		if (!ua.includes("curl")) {
			return Response.redirect("https://nin.ooo", 302);
		}

		const ip = request.headers.get("CF-Connecting-IP") ?? "unknown";
		const isNewVisitor = !(await env.VISIT_COUNTER.get(`ip:${ip}`));

    	let visits = parseInt((await env.VISIT_COUNTER.get("VISITS")) ?? "0");

		if (isNewVisitor) {
			await Promise.all([
				env.VISIT_COUNTER.put(`ip:${ip}`, "1", { expirationTtl: 86400 }),
				env.VISIT_COUNTER.put("VISITS", (++visits).toString()),
			]);
		}

		return new Response(card(visits));
	},
};
